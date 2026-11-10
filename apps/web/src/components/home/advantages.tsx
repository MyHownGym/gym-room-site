import { useLang } from '@/lib/i18n';
import { getAdvantages } from '@/data/advantages';

export function Advantages() {
	const { lang, tr } = useLang();
	const advantages = getAdvantages(lang);
	return (
		<section className="rail advantages">
			<div className="section-heading">
				<p className="eyebrow">{tr('avantages', 'strengths')}</p>
				<h2>{tr('bien plus qu’un', 'more than just')}<br />{tr('simple fitness.', 'a gym.')}</h2>
				<p>{tr(
					'Tout a été pensé pour une expérience inoubliable et pour créer un endroit où l’on se sent comme chez soi. Calme, précision et accompagnement.',
					'Everything has been designed for a memorable experience and to create a place where you feel at home. Calm, precision and guidance.',
				)}</p>
			</div>
			<div className="advantage-grid">
				{advantages.map(item => (
					<a className="advantage-tile" key={item.title} href={`/${item.path}`}>
						<img loading="lazy" src={item.image} alt={item.title + ' — Gym Room'} />
						<div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
