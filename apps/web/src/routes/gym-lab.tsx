import { useEffect } from 'react';
import type { Route } from './+types/gym-lab';
import { seo } from '@/lib/page-meta';
import { useLang } from '@/lib/i18n';
import { PageHero } from '@/components/shared/page-hero';
import { PricingCards, type PricingTier } from '@/components/shared/pricing-cards';
import { Reveal } from '@/components/shared/reveal';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Gym Lab — testing sportif à Versoix | Gym Room',
		description: 'La cellule testing de Gym Room : trois appareils de mesure de précision (k-power, k-deltas, k-pull) pour tester ta force, ta vitesse et ton explosivité.',
		image: 'https://www.gym-room.ch/images/home-gymlab.jpg',
	});
}

export default function GymLabPage() {
	const { tr } = useLang();
	const devices = [
		{
			image: '/images/gym-lab-sprint.webp',
			tag: tr('capteur de vitesse', 'speed sensor'),
			title: 'k-power',
			text: tr(
				'Mesure la vitesse moyenne et maximale en musculation ou sur des sprints de 10, 20 et 30 mètres. Idéal pour suivre la progression en force-vitesse.',
				'Measures average and maximal velocity in strength training or over 10, 20 and 30-metre sprints. Ideal for tracking force-velocity progression.',
			),
		},
		{
			image: '/images/gym-lab-plateformes.webp',
			tag: tr('plateforme de force', 'force plate'),
			title: 'k-deltas',
			text: tr(
				'Mesure la hauteur de saut, le temps de vol, le temps de contact au sol et la force appliquée. Tests : Squat Jump, Countermovement Jump, Abalakov, Drop Jump.',
				'Measures jump height, flight time, ground contact time and applied force. Tests: Squat Jump, Countermovement Jump, Abalakov, Drop Jump.',
			),
		},
		{
			image: '/images/gym-lab-capteur.webp',
			tag: tr('dynamomètre de traction', 'pull dynamometer'),
			title: 'k-pull',
			text: tr(
				'Mesure la force isométrique à un angle défini. Permet d’identifier les asymétries et de cibler les faiblesses musculaires.',
				'Measures isometric strength at a defined angle. Helps identify asymmetries and target muscular weaknesses.',
			),
		},
	];
	const tiers: PricingTier[] = [
		{
			name: 'k-pack 1d',
			price: '249',
			unit: 'CHF',
			features: [tr('1 appareil au choix', '1 device of choice'), tr('3 mesures', '3 measurements'), tr('Rapport PDF détaillé', 'Detailed PDF report')],
		},
		{
			name: 'k-pack 2d',
			price: '349',
			unit: 'CHF',
			badge: tr('Le plus choisi', 'Most chosen'),
			features: [tr('2 appareils au choix', '2 devices of choice'), tr('6 mesures', '6 measurements'), tr('Rapport PDF détaillé', 'Detailed PDF report')],
		},
		{
			name: 'k-pack 3d',
			price: '449',
			unit: 'CHF',
			features: [tr('3 appareils', '3 devices'), tr('9 mesures', '9 measurements'), tr('Rapport PDF détaillé', 'Detailed PDF report')],
		},
	];

	useEffect(() => {
		document.body.classList.add('page-gym-lab');
		return () => document.body.classList.remove('page-gym-lab');
	}, []);

	return (
		<main className="theme-orange">
			<PageHero
				eyebrow="gym lab"
				title={tr('la cellule testing de gym room.', 'the gym room testing cell.')}
				intro={tr(
					'Trois appareils de mesure de précision pour tester ta force, ta vitesse et ton explosivité. Les chiffres ne mentent pas.',
					'Three precision measurement devices to test your strength, speed and explosiveness. Numbers do not lie.',
				)}
				image="/images/gym-lab-capteur.webp"
			/>
			<Reveal direction="up">
			<div className="lab-motto-box"><span className="lab-motto-text">test · train · repeat</span></div>
			</Reveal>
			<Reveal direction="left">
			<section className="rail page-section">
				<div className="section-heading">
					<p className="eyebrow">{tr('appareils', 'devices')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('Trois outils de mesure, zéro approximation.', 'Three measurement tools, zero approximation.')}</span></h2>
					<p>{tr(
						'Chaque appareil cible un aspect précis de la performance. Les données récoltées permettent d’orienter l’entraînement avec précision.',
						'Each device targets a precise aspect of performance. The collected data helps steer training with accuracy.',
					)}</p>
				</div>
				<div className="device-list">
					{devices.map(d => (
						<article className="device-row" key={d.title} tabIndex={0}>
							<img loading="lazy" src={d.image} alt="" />
							<div className="device-body">
								<h3>{d.title}</h3>
								<p><span>{d.tag}</span>{d.text}</p>
							</div>
						</article>
					))}
				</div>
			</section>
			</Reveal>
			<Reveal direction="right">
			<section className="rail page-section">
				<div className="section-heading">
					<p className="eyebrow">{tr('packs', 'packs')}</p>
					<h2><span style={{ fontSize: '32px', lineHeight: 'normal' }}>{tr('Choisis ton pack testing.', 'Choose your testing pack.')}</span></h2>
					<p>{tr(
						'Chaque pack inclut un rapport PDF détaillé avec tes résultats et des recommandations personnalisées.',
						'Each pack includes a detailed PDF report with your results and personalised recommendations.',
					)}</p>
				</div>
				<PricingCards tiers={tiers} />
			</section>
			</Reveal>
		</main>
	);
}
