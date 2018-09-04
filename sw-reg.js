/* jshint esversion:6 */

/* document.addEventListener("DOMContentLoaded", event => {
  if(navigator.serviceWorker) {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => console.log("Service Worker is registered." ,registration))
      .catch(e => console.log("Service Worker registration failed.", e));
  }
}); */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
