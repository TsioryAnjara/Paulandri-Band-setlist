const CACHE_NAME = 'setlist-cache-v1';
const urlsToCache = ['index.html',
  'article.html',
  'manifest.json',
  'css/style.css',
  'js/script.js',
  'js/songdata.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
