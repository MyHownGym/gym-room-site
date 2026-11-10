import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function SiteFooter() {
	const { tr } = useLang();
	return (
		<footer className="site-footer">
			<div className="footer-grid">
				<div className="footer-main">
					<h2>GYM ROOM</h2>
					<p>{tr(
						'Studio de coaching privé et location pour coachs à Versoix. Sur rendez-vous uniquement.',
						'Private coaching studio and rental for coaches in Versoix. By appointment only.',
					)}</p>
					<div className="footer-links">
						<div>
							<h3 className="eyebrow">{tr('Contact', 'Contact')}</h3>
							<a href="https://wa.me/41767124806">076 712 48 06<br />{tr('WhatsApp uniquement', 'WhatsApp only')}</a>
							<a href="mailto:info@gym-room.ch">info@gym-room.ch</a>
						</div>
						<div>
							<h3 className="eyebrow">{tr('Navigation', 'Navigation')}</h3>
							<a href="/">{tr('Accueil', 'Home')}</a>
							<a href="/coaching">{tr('Coaching', 'Coaching')}</a>
							<a href="/location-coach">{tr('Location coach', 'Studio rental')}</a>
							<a href="/gym-lab">Gym Lab</a>
							<a href="/studio">{tr('Studio', 'Studio')}</a>
						</div>
						<div>
							<h3 className="eyebrow">{tr('En plus', 'More')}</h3>
							<a href="/blog">Blog</a>
							<a href="/contact">{tr('Contact', 'Contact')}</a>
							<a href="/faq">FAQ</a>
							<a href="/galerie">{tr('Galerie', 'Gallery')}</a>
						</div>
					</div>
				</div>
				<div className="footer-map">
					<p className="eyebrow">{tr('Localisation', 'Location')}</p>
					<h3>Avenue Choiseul 19a, 1290 Versoix, {tr('Genève', 'Geneva')}</h3>
					<p>24/7</p>
					<iframe title={tr('Localisation de Gym Room', 'Gym Room location')} loading="lazy" src="https://maps.google.com/maps?q=Avenue%20Choiseul%2019a%20Versoix&t=&z=16&ie=UTF8&iwloc=&output=embed" />
					<small>{tr('Aperçu Google Maps : ouvrez dans l’app pour l’itinéraire ou un zoom plus confortable.', 'Google Maps preview: open in the app for directions or a more comfortable zoom.')}</small>
					<a className="button map-button" href="https://www.google.com/maps/search/?api=1&query=Avenue+Choiseul+19a+Versoix" target="_blank" rel="noreferrer">{tr('Ouvrir dans Google Maps', 'Open in Google Maps')} <ArrowRight size={16} /></a>
				</div>
			</div>
			<div className="footer-bottom">
				<span>© Gym Room 2026. {tr('Tous droits réservés.', 'All rights reserved.')}</span>
				<div>
					<a href="/mentions-legales">{tr('Mentions légales', 'Legal notice')}</a>
					<a href="/politique-confidentialite">{tr('Politique de confidentialité', 'Privacy policy')}</a>
				</div>
			</div>
		</footer>
	);
}
