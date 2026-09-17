self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // مفيش تخزين مؤقت — الموقع فيه بيانات لايف من Firebase، فسيبنا الشبكة تتعامل معاها عادي
});
