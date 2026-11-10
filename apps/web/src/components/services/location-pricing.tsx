import { Dumbbell } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const BASE_PER_SESSION = 70;

const locationPacks = [
	{
		name: { fr: 'Pack 5 séances', en: '5-session pack' },
		icons: 1,
		perSession: 60,
		sessions: 5,
		valid: { fr: '1 mois', en: '1 month' },
		blurb: { fr: 'Cinq séances à utiliser à votre rythme.', en: 'Five sessions to use at your own pace.' },
	},
	{
		name: { fr: 'Pack 10 séances', en: '10-session pack' },
		icons: 2,
		perSession: 50,
		sessions: 10,
		valid: { fr: '2 mois', en: '2 months' },
		featured: true,
		blurb: {
			fr: 'Dix séances pour un suivi régulier, sans engagement mensuel.',
			en: 'Ten sessions for regular follow-up, without monthly commitment.',
		},
	},
	{
		name: { fr: 'Pack 20 séances', en: '20-session pack' },
		icons: 3,
		perSession: 40,
		sessions: 20,
		valid: { fr: '3 mois', en: '3 months' },
		blurb: { fr: 'Vingt séances pour un accompagnement sur la durée.', en: 'Twenty sessions for long-term support.' },
	},
];

function formatChf(amount: number) {
	return `CHF ${amount}.–`;
}

function Dumbbells({ count, light }: { count: number; light?: boolean }) {
	return (
		<div className={`offer-icons${light ? ' light' : ''}`} aria-hidden="true">
			{Array.from({ length: count }, (_, i) => (
				<Dumbbell key={i} size={18} strokeWidth={2.25} />
			))}
		</div>
	);
}

export function LocationPricing() {
	const { lang, tr } = useLang();
	return (
		<div className="offer-block">
			<div className="offer-grid">
				{locationPacks.map((plan) => {
					const value = plan.sessions * BASE_PER_SESSION;
					const paid = plan.sessions * plan.perSession;
					const saving = value - paid;
					const pct = Math.round((saving / value) * 100);
					return (
						<article key={plan.name.fr} className={`offer-card${plan.featured ? ' featured' : ''}`}>
							{plan.featured ? <span className="offer-badge">{tr('Le plus choisi', 'Most chosen')}</span> : null}
							<Dumbbells count={plan.icons} light={plan.featured} />
							<h3>{plan.name[lang]}</h3>
							<p className="offer-price">
								<span>{formatChf(plan.perSession)}</span>
								<small>/ {tr('séance', 'session')}</small>
							</p>
							<p className="offer-save">{tr('Économisez', 'Save')} {pct} %</p>
							<p className="offer-upfront">
								{tr(
									`Le pack se règle en une seule fois (${formatChf(paid)}), d’où la durée d’engagement.`,
									`The pack is paid in one go (${formatChf(paid)}), which is why you commit for the full period.`,
								)}
							</p>
							<p className="offer-blurb">{plan.blurb[lang]}</p>
							<ul>
								<li>
									{plan.sessions} {tr('séances de coaching d’une valeur de CHF', 'coaching sessions valued at CHF')} {BASE_PER_SESSION}.– {tr('chacune', 'each')}
								</li>
								<li>{tr('Accès studio privé', 'Private studio access')}</li>
								<li>{tr('Matériel à disposition', 'Equipment available')}</li>
								<li>{tr('Valable', 'Valid')} {plan.valid[lang]}</li>
							</ul>
							<a className="button offer-cta" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">
								{tr('Réserver', 'Book')}
							</a>
						</article>
					);
				})}
			</div>
		</div>
	);
}
