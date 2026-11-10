export type PricingTier = {
	name: string;
	price: string;
	unit: string;
	badge?: string;
	note?: string;
	features: string[];
};

import { useLang } from '@/lib/i18n';

export function PricingCards({ tiers, columns }: { tiers: PricingTier[]; columns?: number }) {
	const { tr } = useLang();
	return (
		<div className={`pricing-grid${columns === 4 ? ' pricing-grid-4' : ''}`}>
			{tiers.map(tier => (
				<div className={`pricing-card${tier.badge ? ' featured' : ''}`} key={tier.name}>
					{tier.badge ? <span className="pricing-badge">{tier.badge}</span> : null}
					<h3>{tier.name}</h3>
					<div className="pricing-price">
						<span className="amount">{tier.price}</span>
						<span className="unit">{tier.unit}</span>
					</div>
					{tier.note ? <p className="pricing-note">{tier.note}</p> : null}
					<ul>
						{tier.features.map(feature => (
							<li key={feature}>{feature}</li>
						))}
					</ul>
					<a className="button primary" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">
						{tr('Réserver', 'Book')}
					</a>
				</div>
			))}
		</div>
	);
}
