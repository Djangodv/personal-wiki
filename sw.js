const openCache = async (cacheName) => {
    const cache = await caches.open(cacheName);
    return cache;
};

// Stale-While-Revalidate will prioritize cached data over using the network, but will update the cache in the background for next time
self.addEventListener('fetch', event => {
    console.log('Fetch event through service-worker triggered')
    event.respondWith(
        openCache('my-app-cache').then((cache) => {
            
            // Uncomment below line to use default behavior when fetching
            return cache.match(event.request).then((cachedResponse) => {
                // Fetch from network in the background
                const networked = fetch(event.request).then(fetchedResponse => {
                    cache.put(event.request, fetchedResponse.clone());
                    return fetchedResponse;
                });
                // Return cached response immediately, or fetch if cache is empty
                return cachedResponse || networked;
            });

            // return cache.match(event.request); // Debug to prevent using up Github API request limits
        })
    );
});

// Source: https://compile7.org/caching/how-to-implement-caching-in-javascript/#service-workers-for-advanced-caching