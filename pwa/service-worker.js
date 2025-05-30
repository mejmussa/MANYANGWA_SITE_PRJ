const CACHE_NAME = 'manyangwa-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pwa/icons/icon-192x192.png',
  '/pwa/icons/icon-512x512.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
