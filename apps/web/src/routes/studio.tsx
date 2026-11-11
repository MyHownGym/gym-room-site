import type { Route } from './+types/studio';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Studio — l’espace Gym Room à Versoix',
		description: 'Découvre l’espace entièrement privatisable de Gym Room : vestiaire, zone cardio et salle de force, Avenue Choiseul 19a à Versoix.',
		image: '/images/studio-hex.webp',
	});
}

export default function StudioPage() {
	const { tr } = useLang();
	const zones = [
		{
			image: '/images/studio-entree.webp',
			title: tr('vestiaire', 'changing room'),
			text: tr(
				'Un petit espace pour se changer et préparer sa tenue de sport, avec des douches communes à disposition.',
				'A small space to change and prepare your sportswear, with shared showers available.',
			),
		},
		{
			image: '/images/studio-cardio.webp',
			title: tr('zone cardio', 'cardio zone'),
			text: tr('Vélo, rameur et tapis de course pour l’échauffement et le travail cardio.', 'Bike, rower and treadmill for warm-up and cardio work.'),
		},
		{
			image: '/images/studio-hex.webp',
			title: tr('salle de force', 'strength room'),
			text: tr(
				'20m² d’espace privatif avec du matériel de qualité pour les séances de musculation. Chaussures d’intérieur obligatoires.',
				'20m² of private space with quality equipment for strength sessions. Indoor shoes required.',
			),
		},
	];

	return (
		<main>
			<PageHero
				eyebrow="studio"
				title="the gym. the room."
				intro={tr(
					'Découvre l’espace entièrement privatisable où se déroulent les séances de coaching et de location à Versoix.',
					'Discover the fully privatisable space where coaching and rental sessions take place in Versoix.',
				)}
				image="/images/studio-hex.webp"
			/>
			<Reveal direction="left">
			<section className="rail page-section">
				<div className="section-heading">
					<p className="eyebrow">{tr('espaces', 'spaces')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('Trois zones, un seul objectif.', 'Three zones, one goal.')}</span></h2>
					<p>{tr(
						'Chaque espace a été pensé pour une expérience d’entraînement fluide, du vestiaire à la salle de force.',
						'Each space was designed for a smooth training experience, from the changing room to the strength room.',
					)}</p>
				</div>
				<div className="zone-grid">
					{zones.map(zone => (
						<div className="zone-tile" key={zone.title}>
							<img loading="lazy" src={zone.image} alt={zone.title} />
							<div className="zone-body">
								<h3>{zone.title}</h3>
								<p>{zone.text}</p>
							</div>
						</div>
					))}
				</div>
				<div className="note-band">
					<p className="eyebrow">{tr('à noter', 'please note')}</p>
					<ul>
						<li>{tr('Chaussures d’intérieur obligatoires', 'Indoor shoes required')}</li>
						<li>{tr('Apporter un petit linge', 'Bring a small towel')}</li>
						<li>{tr('Sur rendez-vous uniquement', 'By appointment only')}</li>
					</ul>
				</div>
			</section>
			</Reveal>
			<Reveal direction="right">
			<section className="rail page-section studio-location">
				<div className="section-heading">
					<p className="eyebrow">{tr('localisation', 'location')}</p>
					<h2>Avenue Choiseul 19a</h2>
					<p>1290 Versoix, {tr('Genève', 'Geneva')}</p>
					<p><a href="tel:+41767124806">076 712 48 06</a> ({tr('WhatsApp uniquement', 'WhatsApp only')})</p>
					<p>24/7. {tr('Sur rendez-vous uniquement', 'By appointment only')}</p>
				</div>
				<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver une visite', 'Book a visit')}</a>
			</section>
			</Reveal>
		</main>
	);
}
