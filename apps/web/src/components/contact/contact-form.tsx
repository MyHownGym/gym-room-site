import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLang } from '@/lib/i18n';

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
	const [sent, setSent] = useState(false);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const subject = encodeURIComponent(`Nouveau message — ${service} — ${name || 'Visiteur'}`);
		const body = encodeURIComponent(
			`Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\nService : ${service}\n\n${message}`,
		);
		window.location.href = `mailto:info@gym-room.ch?subject=${subject}&body=${body}`;
		setSent(true);
	}

	if (sent) {
		return (
			<div className="form-success">
				<h3>{tr('Merci !', 'Thank you!')}</h3>
				<p>{tr(
					'Ton client mail s’est ouvert avec ton message pré-rempli. Envoie-le pour qu’on te réponde au plus vite.',
					'Your mail client opened with your pre-filled message. Send it so we can reply as soon as possible.',
				)}</p>
				<button className="button glass" onClick={() => setSent(false)}>{tr('Écrire un autre message', 'Write another message')}</button>
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
			<button type="submit" className="button primary form-submit">
				<Send size={18} /> {tr('Envoyer', 'Send')}
			</button>
		</form>
	);
}
