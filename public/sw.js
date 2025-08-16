// On install, cache necessary files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('translater-app-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/translater.css',
        '/language.js',
        '/main.js',
        '/images/translater-app-cover.png.jpg',
        // Add any other resources you want to cache
      ]);
    })
  );
});

// Intercept fetch requests and serve cached assets or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
