const openCache = async (cacheName) => {
    const cache = await caches.open(cacheName);
    return cache;
};

self.addEventListener('fetch', event => {
    console.log('Fetch event through service-worker triggered')
    event.respondWith(
        openCache('my-app-cache').then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                // Fetch from network in the background
                const networked = fetch(event.request).then(fetchedResponse => {
                    cache.put(event.request, fetchedResponse.clone());
                    return fetchedResponse;
                });
                // Return cached response immediately, or fetch if cache is empty
                return cachedResponse || networked;
            });
        })
    );
});

// Source: https://compile7.org/caching/how-to-implement-caching-in-javascript/#service-workers-for-advanced-caching