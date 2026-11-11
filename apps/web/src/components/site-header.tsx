import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Mail, Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { useSlidingPill, pillCss } from '@/hooks/use-sliding-pill';

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

export function SiteHeader() {
	const { lang, setLang, tr } = useLang();
	const [open, setOpen] = useState(false);
	const [expanded, setExpanded] = useState<string | null>(null);
	const [mounted, setMounted] = useState(false);

	const [path, setPath] = useState<string | null>(null);
	useEffect(() => {
		setMounted(true);
		setPath(window.location.pathname.replace(/\/+$/, '') || '/');
	}, []);

	const nav: NavItem[] = [
		{ label: tr('Accueil', 'Home'), href: '/' },
		{
			label: tr('Coaching', 'Coaching'),
			href: '/coaching',
			children: [
				{ label: tr('Coaching présentiel', 'In-person coaching'), href: '/coaching#coaching-presentiel' },
				{ label: tr('Programme', 'Programme'), href: '/coaching#programme' },
			],
		},
		{ label: tr('Location coach', 'Studio rental'), href: '/location-coach' },
		{ label: 'Gym Lab', href: '/gym-lab' },
		{ label: tr('Studio', 'Studio'), href: '/studio' },
		{
			label: tr('Plus', 'More'),
			children: [
				{ label: 'Blog', href: '/blog' },
				{ label: tr('Contact', 'Contact'), href: '/contact' },
				{ label: 'FAQ', href: '/faq' },
				{ label: tr('Galerie', 'Gallery'), href: '/galerie' },
			],
		},
	];

	const isActive = (href?: string) => !!href && !!path && (href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`));
	const activeItem = nav.find(item => isActive(item.href) || item.children?.some(child => isActive(child.href.split('#')[0])));
	const activeKey = activeItem?.label ?? null;
	const desktopPill = useSlidingPill<HTMLElement>(activeKey, [lang]);
	const mobilePill = useSlidingPill<HTMLElement>(activeKey, [open, expanded, lang]);

	const langSwitch = (
		<button
			type="button"
			role="switch"
			className={`lang-switch${lang === 'en' ? ' is-en' : ''}`}
			aria-checked={lang === 'en'}
			aria-label={tr('Langue : passer en anglais', 'Language: switch to French')}
			onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
		>
			<span className="lang-switch-knob" aria-hidden="true" />
			<span className={`lang-switch-label${lang === 'fr' ? ' is-on' : ''}`}>FR</span>
			<span className={`lang-switch-label${lang === 'en' ? ' is-on' : ''}`}>EN</span>
		</button>
	);
	const menuLangSwitch = langSwitch;

	return (
		<header className="site-header">
			<div className="header-inner">
				<a className="brand" href="/" aria-label="Gym Room — accueil">
					<img src="/images/logo-gr-blanc.png" alt="" />
					<span>GYM ROOM<small>VERSOIX</small></span>
				</a>
				<nav className="desktop-nav" aria-label={tr('Navigation principale', 'Main navigation')} ref={desktopPill.containerRef} onMouseLeave={desktopPill.clearHover}>
					<span className="nav-pill" aria-hidden="true" style={pillCss(desktopPill.style)} />
					{nav.map(item =>
						item.children ? (
							<div className="nav-dropdown-trigger" key={item.label}>
								<span className="nav-trigger" {...desktopPill.bind(item.label)}>
									{item.href ? <a href={item.href}>{item.label}</a> : <button type="button">{item.label}</button>} <b>+</b>
								</span>
								<div className="nav-dropdown">
									{item.children.map(child => (
										<a key={child.href} href={child.href}>{child.label}</a>
									))}
								</div>
							</div>
						) : (
							<a key={item.href} href={item.href} aria-current={activeKey === item.label ? 'page' : undefined} {...desktopPill.bind(item.label)}>{item.label}</a>
						),
					)}
				</nav>
				<div className="header-actions">
					{langSwitch}
					<a className="icon-link" href="mailto:info@gym-room.ch" aria-label="Email"><Mail size={18} /></a>
					<a className="icon-link" href="https://www.instagram.com/gym_room.ch/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
					<a className="icon-link" href="https://wa.me/41767124806" aria-label="WhatsApp"><MessageCircle size={18} /></a>
					<a className="reserve-link" href="https://gym-room.setmore.com/" target="_blank" rel="noreferrer">{tr('Réserver', 'Book')}</a>
				</div>
				<button className="menu-toggle" aria-label={open ? tr('Fermer le menu', 'Close menu') : tr('Ouvrir le menu', 'Open menu')} aria-expanded={open} onClick={() => setOpen(!open)}>
					{open ? <X /> : <Menu />}
				</button>
			</div>
			{open && (
				<nav className="mobile-nav" aria-label={tr('Navigation mobile', 'Mobile navigation')} ref={mobilePill.containerRef} onMouseLeave={mobilePill.clearHover}>
					<span className="nav-pill" aria-hidden="true" style={pillCss(mobilePill.style)} />
					{nav.map(item =>
						item.children ? (
							<div className="mobile-group" key={item.label}>
								<button
									type="button"
									className="mobile-group-trigger"
									{...mobilePill.bind(item.label)}
									aria-expanded={expanded === item.label}
									onClick={() => setExpanded(expanded === item.label ? null : item.label)}
								>
									{item.href ? (
										<a className="mobile-parent-link" href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
									) : (
										item.label
									)}
									<span className="mobile-caret">{expanded === item.label ? '−' : '+'}</span>
								</button>
								{expanded === item.label && (
									<div className="mobile-submenu">
										{item.children.map(child => (
											<a key={child.href} href={child.href} onClick={() => setOpen(false)}>{child.label}</a>
										))}
									</div>
								)}
							</div>
						) : (
							<a key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={activeKey === item.label ? 'page' : undefined} {...mobilePill.bind(item.label)}>{item.label}</a>
						),
					)}
					<a className="mobile-instagram-link" href="https://www.instagram.com/gym_room.ch/" target="_blank" rel="noreferrer" aria-label="Instagram Gym Room">
						<Instagram size={18} />
						<span>Instagram</span>
					</a>
					<div className="mobile-lang-row">
						<span>{tr('Langue', 'Language')}</span>
						{menuLangSwitch}
					</div>
				</nav>
			)}
			{mounted
				? createPortal(
					<div className={`mobile-lang-bar${open ? ' is-hidden' : ''}`} role="group" aria-label={tr('Changer de langue', 'Switch language')}>
						<button type="button" className={lang === 'fr' ? 'is-active' : ''} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
						<button type="button" className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
					</div>,
					document.body,
				)
				: null}
		</header>
	);
}
