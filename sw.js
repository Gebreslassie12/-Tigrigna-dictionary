const CACHE_NAME = "tigrinya-dict-v1";
const ASSETS = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json"
];

// ፋይላት ኣብ ስልኪ ንምዕቃብ (Install)
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ብዘይ ኢንተርኔት (Offline) ካብ ስልኪ ንምንባብ (Fetch)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

