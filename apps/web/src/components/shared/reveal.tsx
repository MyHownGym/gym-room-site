import { useEffect, useRef, useState, type ReactNode } from 'react';

type Direction = 'left' | 'right' | 'up';

type RevealProps = {
	children: ReactNode;
	direction?: Direction;
	className?: string;
	delay?: number;
};

/**
 * Reveals its children with a subtle fade + slide as they scroll into view.
 * Uses IntersectionObserver (no scroll listeners) for mobile performance,
 * and disables itself entirely when the visitor prefers reduced motion.
 */
export function Reveal({
	children,
	direction = 'left',
	className = '',
	delay = 0,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (mq.matches) {
			setVisible(true);
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`reveal reveal-${direction}${visible ? ' is-visible' : ''}${
				className ? ` ${className}` : ''
			}`}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
}
