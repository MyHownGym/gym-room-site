import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { getReviews } from '@/data/reviews';

function Stars({ className }: { className?: string }) {
	return (
		<div
			className={`review-stars${className ? ` ${className}` : ''}`}
			role="img"
			aria-label="5 sur 5 étoiles"
		>
			{[0, 1, 2, 3, 4].map(i => (
				<svg key={i} viewBox="0 0 24 24" aria-hidden="true">
					<path d="M12 2l2.9 6.26 6.86.74-5.12 4.62 1.46 6.74L12 17.77 5.9 20.36l1.46-6.74L2.24 9l6.86-.74L12 2z" />
				</svg>
			))}
			<span className="review-stars-score">5/5</span>
		</div>
	);
}

export function Reviews() {
	const { lang, tr } = useLang();
	const items = getReviews(lang);
	const trackRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number | null>(null);
	const pausedRef = useRef(false);
	const offsetRef = useRef(0);
	const dragRef = useRef({ active: false, startX: 0, startOffset: 0, pointerId: -1 });
	const [reduced, setReduced] = useState(false);

	// Track the visitor's reduced-motion preference (can change at runtime).
	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => setReduced(mq.matches);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	}, []);

	useEffect(() => {
		// Reduced motion: leave the track as a normal swipeable scroller (no JS motion).
		if (reduced) return;

		const track = trackRef.current;
		const viewport = track?.parentElement;
		if (!track || !viewport) return;

		// Only auto-scroll when there is enough content to overflow the viewport.
		if (track.scrollWidth <= viewport.clientWidth + 2) return;

		const speed = 0.45; // px per frame — slow, calm drift
		const half = () => track.scrollWidth / 2;

		const apply = () => {
			track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
		};

		const step = () => {
			if (!pausedRef.current && !dragRef.current.active) {
				offsetRef.current += speed;
				const h = half();
				if (offsetRef.current >= h) offsetRef.current -= h;
				apply();
			}
			rafRef.current = requestAnimationFrame(step);
		};

		rafRef.current = requestAnimationFrame(step);

		const pause = () => {
			pausedRef.current = true;
		};
		const resume = () => {
			pausedRef.current = false;
		};

		// Pointer-based drag so touch users can swipe manually. `touch-action: pan-y`
		// lets the page scroll vertically while we own the horizontal gesture.
		const onDown = (e: PointerEvent) => {
			dragRef.current = {
				active: true,
				startX: e.clientX,
				startOffset: offsetRef.current,
				pointerId: e.pointerId,
			};
			pausedRef.current = true;
			try {
				track.setPointerCapture(e.pointerId);
			} catch {
				/* ignore */
			}
		};
		const onMove = (e: PointerEvent) => {
			if (!dragRef.current.active || e.pointerId !== dragRef.current.pointerId)
				return;
			const delta = e.clientX - dragRef.current.startX;
			const h = half();
			let next = (dragRef.current.startOffset - delta) % h;
			if (next < 0) next += h;
			offsetRef.current = next;
			apply();
		};
		const onUp = (e: PointerEvent) => {
			if (!dragRef.current.active) return;
			dragRef.current.active = false;
			pausedRef.current = false;
			try {
				track.releasePointerCapture(e.pointerId);
			} catch {
				/* ignore */
			}
		};

		track.addEventListener('mouseenter', pause);
		track.addEventListener('mouseleave', resume);
		track.addEventListener('focusin', pause);
		track.addEventListener('focusout', resume);
		track.addEventListener('pointerdown', onDown);
		track.addEventListener('pointermove', onMove);
		track.addEventListener('pointerup', onUp);
		track.addEventListener('pointercancel', onUp);

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			track.removeEventListener('mouseenter', pause);
			track.removeEventListener('mouseleave', resume);
			track.removeEventListener('focusin', pause);
			track.removeEventListener('focusout', resume);
			track.removeEventListener('pointerdown', onDown);
			track.removeEventListener('pointermove', onMove);
			track.removeEventListener('pointerup', onUp);
			track.removeEventListener('pointercancel', onUp);
			track.style.transform = '';
			offsetRef.current = 0;
		};
	}, [reduced, lang]);

	// Duplicate the set once so the marquee loops seamlessly without a gap.
	const loop = [...items, ...items];

	return (
		<section className="reviews" aria-labelledby="reviews-heading">
			<div className="reviews-head">
				<h2 id="reviews-heading">
					{tr('Ils m’ont fait ', 'They put their ')}
					<span>{tr('confiance', 'trust in me')}</span>
				</h2>
				<Stars className="review-stars--head" />
				<p>{tr('Avis laissés sur Google', 'Reviews left on Google')}</p>
			</div>
			<div
				className={`reviews-viewport${reduced ? ' reviews-viewport--scroll' : ''}`}
			>
				<div
					className="reviews-track reviews-track--marquee"
					ref={trackRef}
					tabIndex={0}
					aria-label={tr(
						'Avis clients — défilement automatique',
						'Customer reviews — auto-scrolling',
					)}
				>
					{loop.map((item, index) => (
						<figure
							className="review-card"
							key={`${item.name}-${index}`}
							aria-hidden={index >= items.length ? 'true' : undefined}
						>
							<span className="review-quote" aria-hidden="true">”</span>
							<blockquote>
								<p>“{item.text}”</p>
							</blockquote>
							<figcaption>
								<Stars className="review-stars--card" />
								<span className="review-card-name">
									<strong>{item.name}</strong>
									<span>{item.when}</span>
								</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
