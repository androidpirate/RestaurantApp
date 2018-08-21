/* jshint esversion: 6 */

const staticCacheName = "static-restaurant-data";
let cacheURLs = [
  "./",
  "./sw_reg.js",
  "index.html",
  "restaurant.html",
  "css/styles.css",
  "data/restaurants.json",
  "js/dbhelper.js",
  "js/main.js",
  "js/restaurant_info.js",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
      if(cache !== staticCacheName) {
        console.log("Remove cache", cache);
        return caches.delete(cache);
      }
    })))
  );
});

self.addEventListener("fetch", event => {
  if(event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if(response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});
