// 한 번 받은 게임 파일(game.js, 발소리)은 폰에 저장해 두고 다시 받지 않는다 → 데이터 절약
const C = 'hor-v8';
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(C).then((c) => c.addAll(['./', 'game.js?v=8', 'steps.mp3']).catch(() => {}))); });
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  if (r.mode === 'navigate') { // 화면(index.html)은 새 버전이 있으면 받고, 없으면 저장본
    e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(C).then((c) => c.put('./', cp)); return res; }).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(r).then((hit) => hit || fetch(r).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(C).then((c) => c.put(r, cp)); } return res; })));
});
