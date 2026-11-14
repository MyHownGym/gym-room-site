import { Activity } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function GymLab() {
	const { tr } = useLang();
	return (
		<section className="rail lab-section">
			<div className="lab-image">
				<video
					src="/images/gym-lab.mp4"
					poster="/images/gym-lab-poster.webp"
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					aria-label={tr('Vidéo de la cellule testing Gym Lab', 'Video of the Gym Lab testing cell')}
				/>
			</div>
			<div className="lab-panel">
				<p className="eyebrow">Gym Lab</p>
				<h2>{tr('la cellule testing de gym room.', 'the gym room testing cell.')}</h2>
				<p className="lab-description">{tr(
					'S’entraîner, c’est bien ; se tester puis s’entraîner, c’est mieux ! Ne perdez pas de vue vos objectifs et démarquez-vous de vos adversaires en connaissant vos forces et vos faiblesses dans les moindres détails.',
					'Training is good; testing then training is better! Keep your goals in sight and stand out from your opponents by knowing your strengths and weaknesses in the finest detail.',
				)}</p>
				<p className="lab-motto"><Activity size={22} /> Test. Train. Repeat.</p>
				<a className="button lab-button" href="/gym-lab">{tr('Découvrir Gym Lab', 'Discover Gym Lab')}</a>
			</div>
		</section>
	);
}
