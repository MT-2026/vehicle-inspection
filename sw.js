const CACHE_NAME = 'vehicle-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
  // لو عندك ملفات CSS أو JS تانية ضيفها هنا مثلاً: './style.css'
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// تشغيل الموقع من الكاش لو مفيش نت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
