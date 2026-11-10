import { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { useLang } from '@/lib/i18n';

type Months = 1 | 3 | 6;
type Audience = 'solo' | 'duo';

const durations: Months[] = [1, 3, 6];

/**
 * Solo session reference is CHF 150. Duo reference is CHF 180 (×1.2).
 * Monthly prices keep that exact ratio so the 3- and 6-month reductions
 * stay identical to the solo cards (4 % / 8 %, 4 % / 8 %, 5 % / 9 %).
 */
const subscriptions = [
	{
		name: { fr: 'Abonnement Basic', en: 'Basic subscription' },
		icons: 1,
		sessions: 4,
		whatsapp: '48h',
		blurb: {
			fr: 'Une séance par semaine pour démarrer avec un coaching structuré.',
			en: 'One session per week to start with structured coaching.',
		},
		duoBlurb: {
			fr: 'Une séance à deux par semaine, même cadre, même suivi.',
			en: 'One session for two per week, same structure, same follow-up.',
		},
		prices: { 1: 520, 3: 500, 6: 480 } as Record<Months, number>,
		duoPrices: { 1: 624, 3: 600, 6: 576 } as Record<Months, number>,
	},
	{
		name: { fr: 'Abonnement Pro', en: 'Pro subscription' },
		icons: 2,
		sessions: 8,
		whatsapp: '24h',
		featured: true,
		blurb: {
			fr: 'Deux séances par semaine pour des résultats visibles plus rapidement.',
			en: 'Two sessions per week for visible results faster.',
		},
		duoBlurb: {
			fr: 'Deux séances à deux par semaine pour progresser plus vite.',
			en: 'Two sessions for two per week to progress faster.',
		},
		prices: { 1: 960, 3: 920, 6: 880 } as Record<Months, number>,
		duoPrices: { 1: 1152, 3: 1104, 6: 1056 } as Record<Months, number>,
	},
	{
		name: { fr: 'Abonnement Premium', en: 'Premium subscription' },
		icons: 3,
		sessions: 12,
		whatsapp: '12h',
		blurb: {
			fr: 'Trois séances par semaine pour des résultats optimaux dès les premiers mois.',
			en: 'Three sessions per week for optimal results from the first months.',
		},
		duoBlurb: {
			fr: 'Trois séances à deux par semaine, pour un rythme soutenu.',
			en: 'Three sessions for two per week, for a sustained rhythm.',
		},
		prices: { 1: 1320, 3: 1260, 6: 1200 } as Record<Months, number>,
		duoPrices: { 1: 1584, 3: 1512, 6: 1440 } as Record<Months, number>,
	},
];

const packs = [
	{
		name: { fr: 'Pack Basic', en: 'Basic pack' },
		duoName: { fr: 'Duo Coaching (pack 5 séances)', en: 'Duo Coaching (5-session pack)' },
		icons: 1,
		perSession: 140,
		duoPerSession: 170,
		duoTotal: 850,
		save: '7 %',
		duoSave: '6 %',
		sessions: 5,
		valid: { fr: '2 mois', en: '2 months' },
		blurb: { fr: 'Cinq séances à utiliser à votre rythme.', en: 'Five sessions to use at your own pace.' },
		duoBlurb: { fr: 'Cinq séances à deux, à utiliser à votre rythme.', en: 'Five sessions for two, at your own pace.' },
	},
	{
		name: { fr: 'Pack Pro', en: 'Pro pack' },
		duoName: { fr: 'Duo Coaching (pack 10 séances)', en: 'Duo Coaching (10-session pack)' },
		icons: 2,
		perSession: 130,
		duoPerSession: 160,
		duoTotal: 1600,
		save: '13 %',
		duoSave: '11 %',
		sessions: 10,
		valid: { fr: '4 mois', en: '4 months' },
		featured: true,
		blurb: {
			fr: 'Dix séances pour un suivi régulier, sans engagement mensuel.',
			en: 'Ten sessions for regular follow-up, without monthly commitment.',
		},
		duoBlurb: {
			fr: 'Dix séances à deux, sans engagement mensuel.',
			en: 'Ten sessions for two, without monthly commitment.',
		},
	},
	{
		name: { fr: 'Pack Premium', en: 'Premium pack' },
		duoName: { fr: 'Duo Coaching (pack 20 séances)', en: 'Duo Coaching (20-session pack)' },
		icons: 3,
		perSession: 120,
		duoPerSession: 150,
		duoTotal: 3000,
		save: '20 %',
		duoSave: '17 %',
		sessions: 20,
		valid: { fr: '6 mois', en: '6 months' },
		blurb: { fr: 'Vingt séances pour un accompagnement sur la durée.', en: 'Twenty sessions for long-term support.' },
		duoBlurb: { fr: 'Vingt séances à deux, pour un accompagnement sur la durée.', en: 'Twenty sessions for two, for long-term support.' },
	},
];

function formatChf(amount: number) {
	const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');
	return `CHF ${formatted}.–`;
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

export function CoachingPricing() {
	const { lang, tr } = useLang();
	const [audience, setAudience] = useState<Audience>('solo');
	const [mode, setMode] = useState<'abonnements' | 'packs'>('abonnements');
	const [durationByCard, setDurationByCard] = useState<Months[]>(() =>
		subscriptions.map(() => 1),
	);
	const duo = audience === 'duo';
	const sessionValue = duo ? 180 : 150;

	return (
		<div className="offer-block">
			<div className="offer-switch" role="tablist" aria-label={tr('Format de coaching', 'Coaching format')}>
				<button
					type="button"
					role="tab"
					aria-selected={audience === 'solo'}
					className={audience === 'solo' ? 'is-active' : ''}
					onClick={() => setAudience('solo')}
				>
					{tr('Coaching', 'Coaching')}
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={audience === 'duo'}
					className={audience === 'duo' ? 'is-active' : ''}
					onClick={() => setAudience('duo')}
				>
					{tr('Duo Coaching', 'Duo Coaching')}
				</button>
			</div>

			<div className="offer-switch" role="tablist" aria-label={tr('Type d’offre', 'Offer type')}>
				<button
					type="button"
					role="tab"
					aria-selected={mode === 'abonnements'}
					className={mode === 'abonnements' ? 'is-active' : ''}
					onClick={() => setMode('abonnements')}
				>
					{tr('Abonnements', 'Subscriptions')}
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={mode === 'packs'}
					className={mode === 'packs' ? 'is-active' : ''}
					onClick={() => setMode('packs')}
				>
					{tr('Packs', 'Packs')}
				</button>
			</div>

			<div className="offer-grid">
				{mode === 'abonnements'
					? subscriptions.map((plan, index) => {
							const months = durationByCard[index];
							const table = duo ? plan.duoPrices : plan.prices;
							const monthly = table[months];
							const baseMonthly = table[1];
							const pct = Math.round(((baseMonthly - monthly) / baseMonthly) * 100);
							const totalSessions = plan.sessions * months;
							const value = totalSessions * sessionValue;
							const paid = monthly * months;
							const saving = value - paid;
							return (
								<article
									key={plan.name.fr}
									className={`offer-card${plan.featured ? ' featured' : ''}`}
								>
									{plan.featured ? <span className="offer-badge">{tr('Le plus choisi', 'Most chosen')}</span> : null}
									<Dumbbells count={plan.icons} light={plan.featured} />
									<h3>{plan.name[lang]}</h3>
									<div
										className="duration-switch"
										role="group"
										aria-label={`${tr('Durée', 'Duration')} ${plan.name[lang]}`}
									>
										{durations.map((d) => (
											<button
												key={d}
												type="button"
												className={months === d ? 'is-active' : ''}
												onClick={() =>
													setDurationByCard((prev) =>
														prev.map((m, i) => (i === index ? d : m)),
													)
												}
											>
												{d} {tr('mois', d === 1 ? 'month' : 'months')}
											</button>
										))}
									</div>
									<p className="offer-price">
										<span>{formatChf(monthly)}</span>
										<small>/{tr('mois', 'month')}</small>
									</p>
									<p className="offer-engage">{tr('Engagement', 'Commitment')} {months} {tr('mois', months === 1 ? 'month' : 'months')}</p>
									{months > 1 ? (
										<p className="offer-upfront">
											{tr(
												`Les ${months} mois se règlent en une seule fois (${formatChf(monthly * months)}). C’est ce paiement unique qui constitue l’engagement.`,
												`The ${months} months are paid in one go (${formatChf(monthly * months)}). That single payment is the commitment.`,
											)}
										</p>
									) : null}
									{pct > 0 ? (
										<p className="offer-save">{tr('Économisez', 'Save')} {pct} %</p>
									) : (
										<p className="offer-save" style={{ visibility: 'hidden' }} aria-hidden="true">-</p>
									)}
									<p className="offer-blurb">{(duo ? plan.duoBlurb : plan.blurb)[lang]}</p>
									<ul>
										<li>
											{totalSessions} {tr('séances de coaching d’une valeur de', 'coaching sessions valued at')} {formatChf(sessionValue)} {tr('chacune (rabais de', 'each (saving of')} {formatChf(saving)})
										</li>
										<li>{tr('Accès gratuit à l’application Ekklo', 'Free access to the Ekklo app')}</li>
										<li>{tr('Suivi Whatsapp sous', 'WhatsApp follow-up within')} {plan.whatsapp}</li>
										<li>{tr('Programme personnalisé', 'Personalised programme')}</li>
										<li>{tr('Ajustement du programme', 'Programme adjustment')}</li>
										<li>{tr('Valable', 'Valid')} {months} {tr('mois', months === 1 ? 'month' : 'months')}</li>
										{duo ? <li>{tr('Séance à deux, avec le même coach', 'Session for two, with the same coach')}</li> : null}
									</ul>
									<a className="button offer-cta" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">
										{tr('Réserver', 'Book')}
									</a>
								</article>
							);
						})
					: (
						<>
							{packs.map((plan) => {
								const perSession = duo ? plan.duoPerSession : plan.perSession;
								const total = duo ? plan.duoTotal : plan.sessions * plan.perSession;
								return (
									<article key={plan.name.fr} className={`offer-card${plan.featured ? ' featured' : ''}`}>
										{plan.featured ? <span className="offer-badge">{tr('Le plus choisi', 'Most chosen')}</span> : null}
										<Dumbbells count={plan.icons} light={plan.featured} />
										<h3>{(duo ? plan.duoName : plan.name)[lang]}</h3>
										<p className="offer-price">
											<span>{formatChf(perSession)}</span>
											<small>/ {tr('séance', 'session')}</small>
										</p>
										<p className="offer-save">{tr('Économisez', 'Save')} {duo ? plan.duoSave : plan.save}</p>
										<p className="offer-upfront">
											{tr(
												`Le pack se règle en une seule fois (${formatChf(total)}), d’où la durée d’engagement.`,
												`The pack is paid in one go (${formatChf(total)}), which is why you commit for the full period.`,
											)}
										</p>
										<p className="offer-blurb">{(duo ? plan.duoBlurb : plan.blurb)[lang]}</p>
										<ul>
											<li>
												{plan.sessions} {tr('séances de coaching d’une valeur de', 'coaching sessions valued at')} {formatChf(sessionValue)} {tr('chacune', 'each')}
											</li>
											<li>{tr('Accès gratuit à l’application Ekklo', 'Free access to the Ekklo app')}</li>
											<li>{tr('Programme personnalisé', 'Personalised programme')}</li>
											<li>{tr('Ajustement du programme', 'Programme adjustment')}</li>
											<li>{tr('Valable', 'Valid')} {plan.valid[lang]}</li>
											{duo ? <li>{tr('Séance à deux, avec le même coach', 'Session for two, with the same coach')}</li> : null}
										</ul>
										<a className="button offer-cta" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">
											{tr('Réserver', 'Book')}
										</a>
									</article>
								);
							})}
						</>
					)}
			</div>
		</div>
	);
}
