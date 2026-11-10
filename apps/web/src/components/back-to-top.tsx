import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function BackToTop() {
	const { tr } = useLang();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<button
			type="button"
			className={`back-to-top${visible ? ' is-visible' : ''}`}
			aria-label={tr('Retour en haut de la page', 'Back to top')}
			aria-hidden={!visible}
			tabIndex={visible ? 0 : -1}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<ArrowUp size={20} />
		</button>
	);
}
