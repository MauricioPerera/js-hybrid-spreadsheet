const CACHE_NAME = 'spreadsheet-cache-v3';
const APP_FILES = ['/', '/index.html', '/js-vector-store.js', '/js-doc-store.js', '/manifest.json', '/icon.svg'];
const CACHE_DOMAINS = ['huggingface.co', 'cdn-lfs.huggingface.co', 'cdn-lfs-us-1.huggingface.co', 'cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const isApp = url.origin === self.location.origin;
  const isCached = CACHE_DOMAINS.some(d => url.hostname.includes(d));
  if (!isApp && !isCached) return;
  e.respondWith(caches.open(CACHE_NAME).then(async c => {
    const cached = await c.match(e.request);
    if (cached) return cached;
    try {
      const res = await fetch(e.request);
      if (res.ok) c.put(e.request, res.clone());
      return res;
    } catch (err) {
      if (isApp) { const fb = await c.match('/index.html'); if (fb) return fb; }
      throw err;
    }
  }));
});
