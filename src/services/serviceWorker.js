export async function register() {

    // Ensure the browser supports the service worker API
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register( // Register a service-worker
                'sw.js',
                {
                    scope: './',
                }
            );
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

// Source: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers