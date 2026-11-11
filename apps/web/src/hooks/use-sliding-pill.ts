import { useCallback, useEffect, useRef, useState } from 'react';

export type PillStyle = { left: number; top: number; width: number; height: number; opacity: number };

const HIDDEN: PillStyle = { left: 0, top: 0, width: 0, height: 0, opacity: 0 };

/**
 * A glass "pill" that slides under the hovered item and settles back on the active one.
 * Items opt in with `bind(key)`; `remeasure` lists values that change the layout (open menus, language).
 */
export function useSlidingPill<T extends HTMLElement>(activeKey: string | null, remeasure: unknown[] = []) {
	const containerRef = useRef<T>(null);
	const [hoverKey, setHoverKey] = useState<string | null>(null);
	const [style, setStyle] = useState<PillStyle>(HIDDEN);

	const measure = useCallback(() => {
		const root = containerRef.current;
		const key = hoverKey ?? activeKey;
		if (!root || !key) {
			setStyle(prev => ({ ...prev, opacity: 0 }));
			return;
		}
		const target = Array.from(root.querySelectorAll<HTMLElement>('[data-pill-key]')).find(el => el.dataset.pillKey === key);
		if (!target) {
			setStyle(prev => ({ ...prev, opacity: 0 }));
			return;
		}
		const box = root.getBoundingClientRect();
		const rect = target.getBoundingClientRect();
		setStyle({ left: rect.left - box.left, top: rect.top - box.top, width: rect.width, height: rect.height, opacity: 1 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hoverKey, activeKey, ...remeasure]);

	useEffect(() => {
		measure();
		window.addEventListener('resize', measure);
		document.fonts?.ready.then(measure).catch(() => {});
		return () => window.removeEventListener('resize', measure);
	}, [measure]);

	const bind = (key: string) => ({
		'data-pill-key': key,
		onMouseEnter: () => setHoverKey(key),
		onFocus: () => setHoverKey(key),
		onBlur: () => setHoverKey(null),
	});

	return { containerRef, style, bind, clearHover: () => setHoverKey(null) };
}

export function pillCss(style: PillStyle) {
	return {
		transform: `translate(${style.left}px, ${style.top}px)`,
		width: `${style.width}px`,
		height: `${style.height}px`,
		opacity: style.opacity,
	};
}
