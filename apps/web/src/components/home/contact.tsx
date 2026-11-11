import { MapPin, Phone, Clock, MessageCircle, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function Contact() {
	const { tr } = useLang();
	return (
		<section className="rail contact-section" id="contact">
			<div className="booking-panel">
				<p className="eyebrow">{tr('Sur rendez-vous', 'By appointment')}</p>
				<h2>
					<span className="booking-title">
						{tr(
							'réserve ton créneau et viens t’entraîner, pour de vrai.',
							'book your slot and come train, for real.',
						)}
					</span>
				</h2>
				<p className="booking-description">{tr(
					'Le parcours doit rester direct. Si tu veux tester, réserver ou demander une précision, tout part d’ici.',
					'The path should stay direct. If you want to test, book or ask for details, it all starts here.',
				)}</p>
				<ul>
					<li><Check size={16} /><span><a href="/location-coach">{tr('Location de studio', 'Studio rental')}</a> {tr('et', 'and')} <a href="/coaching">{tr('coaching privé', 'private coaching')}</a></span></li>
					<li><Check size={16} />{tr('Paiement en ligne ou sur place', 'Online or on-site payment')}</li>
					<li><Check size={16} />{tr('Annulation flexible jusqu’à 24h avant', 'Flexible cancellation up to 24h before')}</li>
				</ul>
				<div className="buttons">
					<a className="button white" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver une séance', 'Book a session')}</a>
					<a className="button glass" href="/coaching">{tr('Voir le coaching', 'See coaching')}</a>
				</div>
			</div>
			<div className="contact-panel">
				<p className="eyebrow">{tr('Infos & Contact', 'Info & Contact')}</p>
				<div className="contact-row">
					<span className="contact-icon"><MapPin size={20} /></span>
					<div>
						<h3>{tr('Adresse', 'Address')}</h3>
						<p>Avenue Choiseul 19a<br />1290 Versoix, {tr('Genève', 'Geneva')}</p>
					</div>
				</div>
				<div className="contact-row">
					<span className="contact-icon"><Phone size={20} /></span>
					<div>
						<h3>{tr('Téléphone', 'Phone')}</h3>
						<p><a href="tel:+41767124806">076 712 48 06</a><br /><a href="https://wa.me/41767124806">{tr('WhatsApp uniquement', 'WhatsApp only')}</a></p>
					</div>
				</div>
				<div className="contact-row">
					<span className="contact-icon"><Clock size={20} /></span>
					<div>
						<h3>{tr('Horaires', 'Hours')}</h3>
						<p>24/7<br /><span>{tr('Sur rendez-vous uniquement', 'By appointment only')}</span></p>
					</div>
				</div>
				<div className="whatsapp-wrap">
					<a className="whatsapp-button" href="https://wa.me/41767124806" target="_blank" rel="noreferrer"><MessageCircle size={18} />{tr('Discuter sur WhatsApp', 'Chat on WhatsApp')}</a>
				</div>
			</div>
		</section>
	);
}
