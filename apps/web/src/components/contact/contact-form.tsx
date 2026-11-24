import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLang } from '@/lib/i18n';

/**
 * Web3Forms access key (public by design: it only lets this form send to the
 * inbox it was created for). While empty, the form falls back to opening the
 * visitor's mail app.
 */
const WEB3FORMS_ACCESS_KEY = '';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

export function ContactForm() {
	const { tr } = useLang();
	const services = [
		tr('Coaching', 'Coaching'),
		tr('Location coach', 'Studio rental'),
		'Gym Lab',
		tr('Programme', 'Programme'),
	];
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [service, setService] = useState(services[0]);
	const [message, setMessage] = useState('');
	const [botcheck, setBotcheck] = useState(false);
	const [status, setStatus] = useState<Status>('idle');

	const subject = `Nouveau message — ${service} — ${name || 'Visiteur'}`;

	function openMailApp() {
		const body = `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\nService : ${service}\n\n${message}`;
		window.location.href = `mailto:info@gym-room.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setStatus('mailto');
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!WEB3FORMS_ACCESS_KEY) {
			openMailApp();
			return;
		}
		setStatus('sending');
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject,
					from_name: 'Site Gym Room',
					replyto: email,
					botcheck,
					Nom: name,
					Email: email,
					Téléphone: phone || '—',
					Service: service,
					Message: message,
				}),
			});
			const result = await response.json().catch(() => ({ success: false }));
			if (!response.ok || !result.success) throw new Error('send failed');
			setStatus('sent');
			setName('');
			setEmail('');
			setPhone('');
			setMessage('');
		} catch {
			setStatus('error');
		}
	}

	if (status === 'sent' || status === 'mailto') {
		return (
			<div className="form-success" role="status">
				<h3>{tr('Merci !', 'Thank you!')}</h3>
				<p>
					{status === 'sent'
						? tr(
							'Ton message est bien envoyé. On te répond au plus vite, en général dans la journée.',
							'Your message has been sent. We will reply as soon as possible, usually within the day.',
						)
						: tr(
							'Ton client mail s’est ouvert avec ton message pré-rempli. Envoie-le pour qu’on te réponde au plus vite.',
							'Your mail client opened with your pre-filled message. Send it so we can reply as soon as possible.',
						)}
				</p>
				<button className="button glass" onClick={() => setStatus('idle')}>{tr('Écrire un autre message', 'Write another message')}</button>
			</div>
		);
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<div className="form-row">
				<label>
					<span>{tr('Nom', 'Name')}</span>
					<input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required placeholder={tr('Ton nom', 'Your name')} />
				</label>
				<label>
					<span>Email</span>
					<input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="ton@email.ch" />
				</label>
			</div>
			<div className="form-row">
				<label>
					<span>{tr('Téléphone', 'Phone')}</span>
					<input type="tel" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="076 ..." />
				</label>
				<label>
					<span>{tr('Service désiré', 'Desired service')}</span>
					<select name="service" value={service} onChange={e => setService(e.target.value)}>
						{services.map(s => <option key={s} value={s}>{s}</option>)}
					</select>
				</label>
			</div>
			<label>
				<span>{tr('Message', 'Message')}</span>
				<textarea name="message" value={message} onChange={e => setMessage(e.target.value)} required rows={5} placeholder={tr('Ta question ou ta demande', 'Your question or request')} />
			</label>
			{/* Spam trap: hidden from people, bots tick it. */}
			<input
				type="checkbox"
				name="botcheck"
				tabIndex={-1}
				autoComplete="off"
				aria-hidden="true"
				checked={botcheck}
				onChange={e => setBotcheck(e.target.checked)}
				style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
			/>
			{status === 'error' ? (
				<p className="form-error" role="alert">
					{tr('L’envoi n’a pas fonctionné. ', 'Sending failed. ')}
					<button type="button" className="form-error-link" onClick={openMailApp}>
						{tr('Envoyer par email à la place', 'Send by email instead')}
					</button>
				</p>
			) : null}
			<button type="submit" className="button primary form-submit" disabled={status === 'sending'}>
				<Send size={18} /> {status === 'sending' ? tr('Envoi…', 'Sending…') : tr('Envoyer', 'Send')}
			</button>
		</form>
	);
}
