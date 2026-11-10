import type { Route } from './+types/contact';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Contact & réservation | Gym Room Versoix',
		description: 'Une question, une demande de précision ou envie de réserver ? Remplis le formulaire ou contacte Gym Room directement par WhatsApp.',
		image: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_1237-4zlrD.jpeg',
	});
}

export default function ContactPage() {
	const { tr } = useLang();
	return (
		<main>
			<PageHero
				eyebrow="contact"
				title={tr('prendre contact ou réserver.', 'get in touch or book.')}
				intro={tr(
					'Une question, une demande de précision ou envie de réserver ? Remplis le formulaire ou contacte-nous directement par WhatsApp.',
					'A question, a request for details or want to book? Fill in the form or contact us directly on WhatsApp.',
				)}
				image="https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_1237-4zlrD.jpeg"
			/>
			<Reveal direction="left">
			<section className="rail page-section contact-layout">
				<div className="contact-form-panel">
					<p className="eyebrow">{tr('Formulaire', 'Form')}</p>
					<h2>CONTACT</h2>
					<ContactForm />
				</div>
				<aside className="contact-info-panel">
					<div className="contact-info-block">
						<p className="eyebrow">{tr('Adresse', 'Address')}</p>
						<h3>Avenue Choiseul 19a</h3>
						<p>1290 Versoix, {tr('Genève', 'Geneva')}</p>
					</div>
					<div className="contact-info-block">
						<p className="eyebrow">{tr('Horaires', 'Hours')}</p>
						<p>24/7</p>
					</div>
					<div className="contact-info-block">
						<p className="eyebrow">{tr('Téléphone', 'Phone')}</p>
						<p><a href="tel:+41767124806">076 712 48 06</a></p>
						<p>{tr('WhatsApp uniquement', 'WhatsApp only')}</p>
					</div>
					<div className="contact-info-block">
						<p className="eyebrow">Email</p>
						<a href="mailto:info@gym-room.ch">info@gym-room.ch</a>
					</div>
					<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver une séance', 'Book a session')}</a>
				</aside>
			</section>
			</Reveal>
		</main>
	);
}
