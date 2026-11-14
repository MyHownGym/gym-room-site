import type { Route } from './+types/politique-confidentialite';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Politique de confidentialité | Gym Room',
		description: 'Politique de confidentialité et de protection des données du site gym-room.ch.',
		image: '/images/studio-hex.webp',
	});
}

export default function PrivacyPage() {
	const { tr } = useLang();
	return (
		<main>
			<section className="rail page-hero-text">
				<p className="eyebrow">legal</p>
				<h1>{tr('politique de confidentialité', 'privacy policy')}</h1>
				<p className="page-hero-intro">{tr('Comment Gym Room traite et protège vos données personnelles.', 'How Gym Room handles and protects your personal data.')}</p>
			</section>
			<Reveal direction="left">
			<section className="rail page-section legal">
				<div className="legal-block">
					<h2>{tr('responsable du traitement', 'data controller')}</h2>
					<p>{tr('Titouan Williams Gym Room, Avenue Choiseul 19a, 1290 Versoix, Genève — info@gym-room.ch', 'Titouan Williams Gym Room, Avenue Choiseul 19a, 1290 Versoix, Geneva — info@gym-room.ch')}</p>
				</div>
				<div className="legal-block">
					<h2>{tr('données collectées', 'data collected')}</h2>
					<p>{tr(
						'Lors d’une prise de contact via le formulaire, nous collectons votre nom, votre email, votre téléphone et le contenu de votre message. Lors d’une réservation, les données nécessaires à la gestion du rendez-vous sont traitées par le système Setmore.',
						'When you contact us via the form, we collect your name, email, phone and the content of your message. When booking, the data needed to manage the appointment is processed by the Setmore system.',
					)}</p>
				</div>
				<div className="legal-block">
					<h2>{tr('finalité', 'purpose')}</h2>
					<p>{tr(
						'Les données servent uniquement à répondre à vos demandes, gérer vos rendez-vous et assurer le suivi de votre accompagnement. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales.',
						'The data is only used to answer your requests, manage your appointments and ensure the follow-up of your support. It is neither sold nor transferred to third parties for commercial purposes.',
					)}</p>
				</div>
				<div className="legal-block">
					<h2>{tr('durée de conservation', 'retention period')}</h2>
					<p>{tr(
						'Les données de contact sont conservées le temps nécessaire au suivi de votre demande, puis archivées ou supprimées conformément aux obligations légales.',
						'Contact data is kept for as long as needed to follow up on your request, then archived or deleted in accordance with legal obligations.',
					)}</p>
				</div>
				<div className="legal-block">
					<h2>{tr('cookies et mesure d’audience', 'cookies and analytics')}</h2>
					<p>{tr(
						'Le site utilise des cookies nécessaires à son fonctionnement (par exemple pour mémoriser votre choix de cookies). Avec votre accord uniquement, il utilise Google Analytics (Google Ireland Ltd.) pour mesurer la fréquentation : pages vues, provenance des visites, type d’appareil et pays. Ces données sont agrégées et servent à améliorer le site. Sans votre accord, aucun cookie de mesure n’est déposé. Vous pouvez modifier votre choix à tout moment via « Paramètres des cookies » en bas de chaque page. Votre choix est conservé 6 mois.',
						'The site uses cookies required for it to work (for example to remember your cookie choice). Only with your consent, it uses Google Analytics (Google Ireland Ltd.) to measure traffic: page views, traffic sources, device type and country. This data is aggregated and used to improve the site. Without your consent, no analytics cookie is set. You can change your choice at any time via “Cookie settings” at the bottom of every page. Your choice is kept for 6 months.',
					)}</p>
				</div>
				<div className="legal-block">
					<h2>{tr('vos droits', 'your rights')}</h2>
					<p>{tr(
						'Conformément à la loi suisse sur la protection des données (nLPD) et au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour l’exercer, écrivez à info@gym-room.ch.',
						'In accordance with the Swiss data protection law (nLPD) and the GDPR, you have the right to access, rectify and delete your data. To exercise it, write to info@gym-room.ch.',
					)}</p>
				</div>
			</section>
			</Reveal>
		</main>
	);
}
