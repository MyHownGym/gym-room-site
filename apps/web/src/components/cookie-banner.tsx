import { useCookieBanner } from '@/hooks/use-cookie-banner';
import { useLang } from '@/lib/i18n';

export function CookieBanner() {
	const banner = useCookieBanner();
	const { tr } = useLang();

	if (!banner.isOpen) return null;

	return (
		<section role="dialog" aria-label={tr('Cookies', 'Cookies')} className="cookie-banner">
			<p className="cookie-banner-title">{tr('Cookies', 'Cookies')}</p>
			<p className="cookie-banner-text">
				{tr(
					'Ce site utilise des cookies nécessaires à son fonctionnement et, avec votre accord, des cookies de mesure d’audience (Google Analytics) pour améliorer le site.',
					'This site uses cookies required to run it and, with your permission, audience-measurement cookies (Google Analytics) to improve the site.',
				)}{' '}
				<a href="/politique-confidentialite">{tr('En savoir plus', 'Learn more')}</a>
			</p>

			{banner.isCustomizing ? (
				<fieldset className="cookie-banner-options">
					<legend className="sr-only">{tr('Personnaliser', 'Customize')}</legend>
					<label className="cookie-banner-option">
						<input type="checkbox" checked disabled />
						<span>
							<strong>{tr('Nécessaires', 'Necessary')}</strong>
							<small>{tr('Indispensables au fonctionnement du site. Toujours actifs.', 'Required for the site to work. Always on.')}</small>
						</span>
					</label>
					<label className="cookie-banner-option">
						<input
							type="checkbox"
							checked={banner.choices.analytics}
							onChange={event => banner.setChoice('analytics', event.target.checked)}
						/>
						<span>
							<strong>{tr('Mesure d’audience', 'Analytics')}</strong>
							<small>{tr('Google Analytics : pages vues, provenance des visites, appareil. Données anonymisées.', 'Google Analytics: page views, traffic sources, device. Anonymised data.')}</small>
						</span>
					</label>
				</fieldset>
			) : null}

			<div className="cookie-banner-actions">
				<button type="button" className="cookie-btn cookie-btn-outline" onClick={banner.rejectOptional}>
					{tr('Refuser', 'Decline')}
				</button>
				{banner.isCustomizing ? (
					<button type="button" className="cookie-btn cookie-btn-soft" onClick={banner.saveChoices}>
						{tr('Enregistrer', 'Save')}
					</button>
				) : (
					<button type="button" className="cookie-btn cookie-btn-soft" onClick={banner.customize}>
						{tr('Personnaliser', 'Customize')}
					</button>
				)}
				<button type="button" className="cookie-btn cookie-btn-primary" onClick={banner.acceptAll}>
					{tr('Tout accepter', 'Accept all')}
				</button>
			</div>
		</section>
	);
}
