const cacheName = 'motivational-pwa-v1';
const assetsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './confetti.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache =>
      cache.addAll(assetsToCache).catch(err => {
        console.warn('⚠️ Some files failed to cache:', err);
      })
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
