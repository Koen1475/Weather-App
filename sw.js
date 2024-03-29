self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["/", "images/clear.png", "/style.css"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondwith(
    caches.match(e.request).then(response =>{
      return response || fetch.(e.request);
    })
  )
});
