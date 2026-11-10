import type { Route } from './+types/access';
import { redirect } from 'react-router';

/**
 * /access was replaced by /location-coach. The old URL may still be indexed,
 * so redirect it permanently instead of returning a 404.
 */
export function loader() {
	return redirect('/location-coach', 301);
}

export default function AccessRedirect() {
	return null;
}
