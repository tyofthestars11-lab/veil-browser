const CACHE = 'veil-browser-v12';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isDoc = e.request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html');
  if (isDoc) {
    // network-first: a new build reaches every player on their next visit
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.open(CACHE).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        if (res && res.status === 200) c.put(e.request, res.clone());
        return res;
      })))
    );
  }
});
