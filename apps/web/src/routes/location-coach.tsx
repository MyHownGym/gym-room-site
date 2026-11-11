import type { Route } from './+types/location-coach';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { LocationPricing } from '@/components/services/location-pricing';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Location coach — studio privé à louer à Versoix | Gym Room',
		description: 'Un studio privé et bien équipé à Versoix, à louer pour les coachs indépendants qui veulent un cadre premium pour leurs clients. Réservez en pack.',
		image: '/images/studio-hex.webp',
	});
}

export default function LocationCoachPage() {
	const { tr } = useLang();
	const features = [
		{
			image: '/images/studio-cardio.webp',
			title: tr('espace privé', 'private space'),
			text: tr('Pendant ton créneau, le studio n’est qu’à toi et tes clients : pas d’autres membres en même temps.', 'During your slot, the studio is only yours and your clients’: no other members at the same time.'),
		},
		{
			image: '/images/studio-hex.webp',
			title: tr('matériel de qualité', 'quality equipment'),
			text: tr('Une salle de force 20m² avec du matériel de musculation et de cardio pour des séances complètes.', 'A 20m² strength room with strength and cardio equipment for complete sessions.'),
		},
		{
			image: '/images/studio-entree.webp',
			title: tr('vestiaire & douches', 'changing room & showers'),
			text: tr('Un petit espace pour se changer, avec des douches communes à disposition.', 'A small space to change, with shared showers available.'),
		},
		{
			image: '/images/studio-nuit.webp',
			title: tr('sur rendez-vous', 'by appointment'),
			text: tr('Le studio s’ouvre sur réservation, 24/7, à l’horaire qui t’arrange.', 'The studio opens by booking, 24/7, at the time that suits you.'),
		},
	];

	return (
		<main>
			<PageHero
				eyebrow="location coach"
				title={tr('ton studio. tes clients.', 'your studio. your clients.')}
				intro={tr(
					'À Versoix, un studio privé à louer pour les coachs indépendants qui veulent un cadre premium pour leurs clients. Réservation simple, espace calme, matériel dispo.',
					'In Versoix, a private studio to rent for independent coaches who want a premium setting for their clients. Simple booking, calm space, equipment available.',
				)}
				image="/images/studio-hex.webp"
				motto={tr('« le fitness, en mieux. » — t. williams', '“fitness, but better.” — t. williams')}
			/>

			<Reveal direction="left">
			<section className="rail page-section">
				<div className="section-heading">
					<p className="eyebrow">{tr('le concept', 'the concept')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('un cadre premium pour vos séances.', 'a premium setting for your sessions.')}</span></h2>
				</div>
				<div className="feature-grid">
					{features.map(f => (
						<div className="feature-tile" key={f.title}>
							<img loading="lazy" src={f.image} alt={f.title} />
							<div className="feature-body">
								<h3>{f.title}</h3>
								<p>{f.text}</p>
							</div>
						</div>
					))}
				</div>
			</section>
			</Reveal>

			<Reveal direction="right">
			<section className="rail page-section" id="packs">
				<div className="section-heading">
					<p className="eyebrow">{tr('packs', 'packs')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('choisis ton pack location.', 'choose your rental pack.')}</span></h2>
					<p>{tr(
						'Réservez en pack pour bénéficier d’un tarif réduit. Chaque séance se planifie à votre rythme, dans la limite de validité du pack.',
						'Book in a pack to get a reduced rate. Each session is scheduled at your pace, within the pack’s validity.',
					)}</p>
				</div>
				<LocationPricing />
			</section>
			</Reveal>

			<Reveal direction="left">
			<section className="rail page-section cta-band">
				<div className="cta-inner cta-split">
					<div className="cta-text">
						<p className="eyebrow"><span style={{ color: 'rgb(255, 255, 255)' }}>{tr('passez à l’action', 'take action')}</span></p>
						<h2>{tr('prêt à réserver ton studio ?', 'ready to book your studio?')}</h2>
						<p>{tr(
							'Choisis un créneau via le système de réservation ou écris-nous pour une question précise.',
							'Pick a slot via the booking system or write to us for a specific question.',
						)}</p>
					</div>
					<div className="buttons">
						<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver', 'Book')}</a>
						<a className="button glass" href="/contact">{tr('Contact', 'Contact')}</a>
					</div>
				</div>
			</section>
			</Reveal>
		</main>
	);
}
