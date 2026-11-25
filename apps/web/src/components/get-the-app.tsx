import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { APP_STORE_URL, PLAY_STORE_URL, openStore } from '@/lib/app-stores';
import { useLang } from '@/lib/i18n';

const AppleIcon = () => (
	<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.65-.39 6.58 1.1 8.73.73 1.05 1.6 2.23 2.73 2.19 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.48zM14.2 6.13c.6-.73 1-1.74.9-2.75-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.56-1.22z" /></svg>
);
const PlayIcon = () => (
	<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="#34A853" d="M3.6 2.3 13.4 12l-9.8 9.7c-.35-.2-.6-.6-.6-1.1V3.4c0-.5.25-.9.6-1.1z" /><path fill="#FBBC04" d="m16.7 15.3-3.3-3.3 3.3-3.3 3.7 2.1c.9.5.9 1.8 0 2.3z" /><path fill="#EA4335" d="M13.4 12 3.6 21.7c.3.2.8.2 1.2 0l11.9-6.4z" /><path fill="#4285F4" d="M13.4 12 16.7 8.7 4.8 2.3c-.4-.2-.9-.2-1.2 0z" /></svg>
);

export function useGetTheApp() {
	const [open, setOpen] = useState(false);
	return { open, setOpen, trigger: () => { if (!openStore()) setOpen(true); } };
}

export function StoresDialog({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
	const { tr } = useLang();
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="stores-dialog">
				<DialogHeader>
					<DialogTitle>{tr('Télécharger l’app Ekklo', 'Get the Ekklo app')}</DialogTitle>
					<DialogDescription>{tr('Votre programme, vos séances et votre suivi, sur iPhone et Android.', 'Your programme, sessions and tracking, on iPhone and Android.')}</DialogDescription>
				</DialogHeader>
				<div className="store-buttons">
					<a className="store-button" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
						<AppleIcon />
						<span><small>{tr('Télécharger dans', 'Download on the')}</small><strong>App Store</strong></span>
					</a>
					<a className="store-button" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
						<PlayIcon />
						<span><small>{tr('Disponible sur', 'Get it on')}</small><strong>Google Play</strong></span>
					</a>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export function GetTheAppFloating() {
	const app = useGetTheApp();
	return (
		<>
			<button type="button" className="get-app-float" onClick={app.trigger}>
				<span className="get-app-logo"><img src="/images/logo-gr-blanc.png" alt="" /></span>
				Get the app
			</button>
			<StoresDialog open={app.open} setOpen={app.setOpen} />
		</>
	);
}
