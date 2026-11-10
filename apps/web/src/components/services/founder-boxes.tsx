import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const credentials = [
	{
		src: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_6599-pehrT.jpeg',
		alt: { fr: 'Bachelor', en: 'Bachelor' },
		title: { fr: 'bachelor', en: 'bachelor' },
		text: { fr: 'en sciences du sport', en: 'in sport science' },
	},
	{
		src: 'https://horizons-cdn.hostinger.com/af62100b-b93b-4c2b-9c77-bbd7225fee8d/img_6598-WvD6M.jpeg',
		alt: { fr: 'Entraîneur B', en: 'Coach B' },
		title: { fr: 'entraîneur b', en: 'coach b' },
		text: { fr: 'swiss athletics', en: 'swiss athletics' },
	},
];

const stats = [
	{ num: '1', label: { fr: 'un coach rien que pour vous', en: 'a coach just for you' } },
	{ num: '10', label: { fr: 'années de coaching', en: 'years of coaching' } },
];

export function FounderBoxes() {
	const { lang, tr } = useLang();
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		if (!active) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setActive(null);
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [active]);

	return (
		<div className="founder-boxes">
			{credentials.map((c) => (
				<div
					key={c.src}
					className="credential credential-clickable"
					role="button"
					tabIndex={0}
					aria-label={`${tr('Agrandir', 'Enlarge')}: ${c.alt[lang]}`}
					onClick={() => setActive(c.src)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							setActive(c.src);
						}
					}}
				>
					<img loading="lazy" src={c.src} alt={c.alt[lang]} />
					<h3>{c.title[lang]}</h3>
					<p>{c.text[lang]}</p>
				</div>
			))}
			{stats.map((s) => (
				<div className="stat-box" key={s.num}>
					<span className="stat-num">{s.num}</span>
					<span className="stat-label">{s.label[lang]}</span>
				</div>
			))}
			{active ? (
				<div
					className="lightbox-overlay"
					role="dialog"
					aria-modal="true"
					onClick={() => setActive(null)}
				>
					<button
						type="button"
						className="lightbox-close"
						onClick={() => setActive(null)}
						aria-label={tr('Fermer', 'Close')}
					>
						<X size={28} />
					</button>
					<img src={active} alt="" onClick={(e) => e.stopPropagation()} />
				</div>
			) : null}
		</div>
	);
}
