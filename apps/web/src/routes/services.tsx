import type { Route } from './+types/services';
import { redirect } from 'react-router';

/**
 * /services was renamed to /coaching. The old URL is still published online,
 * so redirect it permanently instead of returning a 404.
 */
export function loader() {
	return redirect('/coaching', 301);
}

export default function ServicesRedirect() {
	return null;
}
