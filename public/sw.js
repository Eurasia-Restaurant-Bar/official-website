const CACHE_NAME = "eurasia-static-v1";

const CACHEABLE_PATH_PREFIXES = ["/_next/static/", "/photos/", "/_next/image"];
const CACHEABLE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".svg", ".ico", ".woff", ".woff2"];

function isCacheable(url) {
  return (
    CACHEABLE_PATH_PREFIXES.some((prefix) => url.pathname.startsWith(prefix)) ||
    CACHEABLE_EXTENSIONS.some((ext) => url.pathname.endsWith(ext))
  );
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  if (!isCacheable(url)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
