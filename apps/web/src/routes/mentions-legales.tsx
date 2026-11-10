import type { Route } from './+types/mentions-legales';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Mentions légales | Gym Room',
		description: 'Informations légales relatives au site gym-room.ch.',
		image: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_5486-kH3mh.jpeg',
	});
}

export default function LegalPage() {
	const { tr } = useLang();
	return (
		<main>
			<section className="rail page-hero-text">
				<p className="eyebrow">legal</p>
				<h1>{tr('mentions légales', 'legal notice')}</h1>
				<p className="page-hero-intro">{tr('Informations légales relatives au site gym-room.ch.', 'Legal information about the gym-room.ch website.')}</p>
				<p className="legal-updated">{tr('Dernière mise à jour : novembre 2026', 'Last updated: November 2026')}</p>
            			</section>
			<Reveal direction="left">
				<section className="rail page-section legal">
					<div className="legal-block">
						<h2>{tr('1. éditeur du site', '1. site publisher')}</h2>
						<p>{tr(
							'Le présent site gym-room.ch est édité par Titouan Williams, coach sportif indépendant, exerçant en tant qu’activité indépendante dans le canton de Genève (Suisse).',
							'This website gym-room.ch is published by Titouan Williams, an independent sports coach operating as an independent activity in the canton of Geneva (Switzerland).',
						)}</p>
						<p><strong>{tr('Activité', 'Activity')} :</strong> {tr('coaching sportif et préparation physique', 'sports coaching and physical preparation')}</p>
						<p><strong>{tr('Numéro IDE', 'IDE number')} :</strong> CHE-215.381.829</p>
						<p><strong>{tr('Lieux d’activité', 'Places of activity')} :</strong> {tr('Gym Room (Versoix), Fitness Campus (Lancy), Coach Room (Genève) et à domicile', 'Gym Room (Versoix), Fitness Campus (Lancy), Coach Room (Geneva) and at home')}</p>
						<p><strong>{tr('Contact', 'Contact')} :</strong> {tr('via le formulaire de réservation ou la page contact du site', 'via the booking form or the contact page of the site')}</p>
					</div>
					<div className="legal-block">
						<h2>{tr('2. hébergement', '2. hosting')}</h2>
						<p>{tr(
							'Le site est hébergé par Hostinger International Ltd., dont le siège social se situe à Kaunas, Lituanie. Les serveurs assurant l’accès au site sont exploités par Hostinger.',
							'The site is hosted by Hostinger International Ltd., whose registered office is located in Kaunas, Lithuania. The servers providing access to the site are operated by Hostinger.',
						)}</p>
					</div>
					<div className="legal-block">
						<h2>{tr('3. propriété intellectuelle', '3. intellectual property')}</h2>
						<p>{tr(
							'L’ensemble des contenus présents sur ce site (textes, images, logos, photographies, mise en page) est la propriété de Titouan Williams, sauf mention contraire, et est protégé par le droit suisse et international de la propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.',
							'All content on this site (texts, images, logos, photographs, layout) is the property of Titouan Williams, unless otherwise stated, and is protected by Swiss and international intellectual property law. Any reproduction, representation, modification or distribution, in whole or in part, without prior written authorisation is prohibited.',
						)}</p>
					</div>
					<div className="legal-block">
						<h2>{tr('4. responsabilité', '4. liability')}</h2>
						<p>{tr(
							'Les informations diffusées sur ce site sont fournies à titre indicatif. Titouan Williams s’efforce d’assurer l’exactitude et la mise à jour des informations, mais ne saurait être tenu responsable d’éventuelles erreurs, omissions ou indisponibilités du site. Les programmes et conseils proposés ne remplacent pas un avis médical ; il est recommandé de consulter un professionnel de santé avant toute reprise d’activité physique.',
							'The information published on this site is provided for indicative purposes. Titouan Williams strives to ensure the accuracy and updating of the information, but cannot be held liable for any errors, omissions or unavailability of the site. The programmes and advice offered do not replace medical advice; it is recommended to consult a healthcare professional before resuming any physical activity.',
						)}</p>
					</div>
					<div className="legal-block">
						<h2>{tr('5. liens externes', '5. external links')}</h2>
						<p>{tr(
							'Ce site peut contenir des liens vers des sites tiers (notamment la plateforme de réservation Setmore). Titouan Williams n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et leurs pratiques en matière de protection des données.',
							'This site may contain links to third-party sites (including the Setmore booking platform). Titouan Williams has no control over these sites and declines any responsibility for their content and data protection practices.',
						)}</p>
					</div>
					<div className="legal-block">
						<h2>{tr('6. droit applicable', '6. applicable law')}</h2>
						<p>{tr(
							'Les présentes mentions légales sont régies par le droit suisse. Tout litige relatif à l’utilisation du site relève de la compétence des tribunaux du canton de Genève, sous réserve des dispositions impératives applicables.',
							'These legal notices are governed by Swiss law. Any dispute relating to the use of the site falls under the jurisdiction of the courts of the canton of Geneva, subject to the applicable mandatory provisions.',
						)}</p>
					</div>
				</section>
			</Reveal>
		</main>
	);
}
