/* jshint esversion: 6 */

const CACHE_NAME = "cache-restaurant-data";
let cacheURLs = [
  "/",
  "sw_reg.js",
  "index.html",
  "restaurant.html",
  "css/styles.css",
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

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(cacheURLs);
        })
    );
});

self.addEventListener('fecth', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if(response) {
                return response;
            }
            return fetch(event.request);
        }));
});
