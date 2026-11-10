import type { Route } from './+types/home';
import { seo } from '@/lib/page-meta';
import { Hero } from '@/components/home/hero';
import { Advantages } from '@/components/home/advantages';
import { Reviews } from '@/components/home/reviews';
import { GymLab } from '@/components/home/gym-lab';
import { Contact } from '@/components/home/contact';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Gym Room — studio de coaching & location à Versoix',
		description: 'Petit espace, grand impact. Studio privé à Versoix dédié au coaching, au testing et à la location de studio pour coachs, sur rendez-vous.',
		image: 'https://www.gym-room.ch/images/home-hero-main.jpg',
		jsonLd: [
			{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Gym Room' },
			{
				'@context': 'https://schema.org',
				'@type': 'ExerciseGym',
				name: 'Gym Room',
				telephone: '+41767124806',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Avenue Choiseul 19a',
					postalCode: '1290',
					addressLocality: 'Versoix',
					addressCountry: 'CH',
				},
			},
		],
	});
}

export default function HomePage() {
	return (
		<main>
			<Reveal direction="up"><Hero /></Reveal>
			<Reveal direction="left"><Advantages /></Reveal>
			<Reveal direction="right"><Reviews /></Reveal>
			<Reveal direction="left"><GymLab /></Reveal>
			<Reveal direction="right"><Contact /></Reveal>
		</main>
	);
}
