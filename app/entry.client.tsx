/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

import posthog from 'posthog-js';
posthog.init('phc_BojK6C1b7s7TiqMgFtO0kvKlltNcbJATqFpAaZdEEEW', {
    api_host: 'https://app.posthog.com'
});

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <RemixBrowser />
        </StrictMode>
    );
});
