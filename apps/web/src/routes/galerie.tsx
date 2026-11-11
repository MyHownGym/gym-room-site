import type { Route } from './+types/galerie';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';

const images = [
	{ src: '/images/studio-entree.webp', alt: 'Gym Room Versoix' },
	{ src: '/images/coaching-studio.webp', alt: 'Studio Gym Room, vue intérieure' },
	{ src: '/images/halteres.webp', alt: 'Espace fitness' },
	{ src: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_1064-GZ9ay.jpeg', alt: 'Gym Lab, testing en action' },
	{ src: '/images/studio-cardio.webp', alt: 'Équipements du studio' },
	{ src: '/images/studio-nuit.webp', alt: 'Gym Lab, testing sportif' },
	{ src: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_1052-uOd0W.jpeg', alt: 'Titouan Williams, coach' },
	{ src: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_2167-i40Lg.jpeg', alt: 'Studio Gym Room, espace force' },
	{ src: '/images/rack-logo.webp', alt: 'Coaching en cours' },
	{ src: '/images/studio-hex.webp', alt: 'Gym Lab, mesures de performance' },
	{ src: '/images/halteres-rack.webp', alt: 'Studio Gym Room' },
	{ src: '/images/poignee-logo.webp', alt: 'Vue d’ensemble du studio' },
];

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Galerie — Gym Room en images | Versoix',
		description: 'Retrouve les installations, les machines et l’ambiance du studio Gym Room à Versoix en images.',
		image: 'https://www.gym-room.ch/images/home-hero-main.jpg',
	});
}

export default function GaleriePage() {
	const { tr } = useLang();
	return (
		<main>
			<PageHero
				eyebrow="galerie"
				title={tr('gym room en images.', 'gym room in pictures.')}
				intro={tr(
					'Retrouve les installations, les machines et l’ambiance du studio en images.',
					'Find the facilities, the machines and the atmosphere of the studio in pictures.',
				)}
			/>
			<Reveal direction="left">
			<section className="rail page-section">
				<div className="galerie-grid">
					{images.map(img => (
						<figure className="galerie-tile" key={img.src}>
							<img loading="lazy" src={img.src} alt={img.alt} />
						</figure>
					))}
				</div>
				<div className="cta-band">
					<div className="cta-inner">
						<h2>{tr('envie de voir le studio ?', 'want to see the studio?')}</h2>
						<p>{tr('Réserve une séance et découvre Gym Room en personne.', 'Book a session and discover Gym Room in person.')}</p>
						<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver', 'Book')}</a>
					</div>
				</div>
			</section>
			</Reveal>
		</main>
	);
}
