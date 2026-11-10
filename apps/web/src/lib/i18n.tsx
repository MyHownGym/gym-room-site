import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react';

export type Lang = 'fr' | 'en';

type LanguageContextValue = {
	lang: Lang;
	setLang: (lang: Lang) => void;
	/** Pick a string for the active language: `tr('français', 'english')`. */
	tr: (fr: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
	lang: 'fr',
	setLang: () => {},
	tr: fr => fr,
});

const STORAGE_KEY = 'gr-lang';

function readStoredLang(): Lang | null {
	if (typeof window === 'undefined') return null;
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === 'en' || stored === 'fr') return stored;
	} catch {
		/* ignore */
	}
	return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	// Server render and first client render are always 'fr' so the markup
	// matches; the stored preference is applied right after hydration.
	const [lang, setLangState] = useState<Lang>('fr');

	useEffect(() => {
		const stored = readStoredLang();
		if (stored && stored !== lang) {
			setLangState(stored);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = lang === 'en' ? 'en' : 'fr-CH';
		}
	}, [lang]);

	const setLang = useCallback((next: Lang) => {
		setLangState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* ignore */
		}
	}, []);

	const tr = useCallback(
		(fr: string, en: string) => (lang === 'en' ? en : fr),
		[lang],
	);

	return (
		<LanguageContext.Provider value={{ lang, setLang, tr }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLang() {
	return useContext(LanguageContext);
}

/** Standalone picker for non-component modules (data files, loaders). */
export function pickLang<T>(lang: Lang, fr: T, en: T): T {
	return lang === 'en' ? en : fr;
}
