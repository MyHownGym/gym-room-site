import type { Route } from './+types/galerie';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';

const images = [
	{ src: '/images/studio-entree.webp', alt: 'Entrée de Gym Room avec le logo lumineux' },
	{ src: '/images/coaching-studio.webp', alt: 'Séance au studio devant le logo Gym Room' },
	{ src: '/images/halteres.webp', alt: 'Haltère réglable au studio' },
	{ src: '/images/galerie-materiel.webp', alt: 'Serviette brodée Gym Room' },
	{ src: '/images/studio-cardio.webp', alt: 'Espace cardio du studio' },
	{ src: '/images/studio-nuit.webp', alt: 'Le studio en lumière bleue' },
	{ src: '/images/pile-de-poids.webp', alt: 'Pile de poids de la machine guidée' },
	{ src: '/images/facade-gym-room.webp', alt: 'Façade de Gym Room à Versoix' },
	{ src: '/images/rack-logo.webp', alt: 'Logo Gym Room sur le rack' },
	{ src: '/images/studio-hex.webp', alt: 'Le studio et ses lumières hexagonales' },
	{ src: '/images/halteres-rack.webp', alt: 'Haltères réglables sur leur support Gym Room' },
	{ src: '/images/poignee-logo.webp', alt: 'Poignée avec plaque Gym Room' },
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
