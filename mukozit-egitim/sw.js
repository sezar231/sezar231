/* Kemoterapide Ağız Bakımı: internetsiz çalışma.
   Bu dosya index.html ile aynı klasörde ve HTTPS üzerinden sunulduğunda devreye girer.
   Uygulama bir kez açıldıktan sonra telefonda saklanır; internet yokken de açılır.
   İçeriği güncellediğinizde aşağıdaki sürüm adını değiştirin (ör. v4). */
var CACHE = 'agiz-bakimi-v3';
var FILES = ['./', './index.html'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

/* Önce telefondaki kopyayı göster, arka planda yenisini indir. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(e.request, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(e.request).then(function (res) {
        if (res && res.ok) c.put(e.request, res.clone());
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
