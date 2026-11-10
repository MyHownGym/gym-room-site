import { Activity } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function GymLab() {
	const { tr } = useLang();
	return (
		<section className="rail lab-section">
			<div className="lab-image">
				<img
					src="https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/photo-2026-09-03-09-13-15-0Caiu.jpg"
					alt={tr('La cellule testing de Gym Room', 'The Gym Room testing cell')}
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
