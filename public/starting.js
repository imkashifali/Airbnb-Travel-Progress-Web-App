let cacheUserData = "user_data";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheUserData).then((data) => {
      data.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "index.html",
        "/Header.js",
        "/Header.css",
        "/Home.js",
        "/Home.css",
        "/Banner.js",
        "/Banner.css",
        "/Card.js",
        "/Card.css",
        "/Search.js",
        "/Search.css",
        "/SearchPage.js",
        "/SearchPage.css",
        "/SearchResult.js",
        "/SearchResult.css",
        "/Footer.js",
        "/Footer.css",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
