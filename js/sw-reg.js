/* jshint esversion:6 */

document.addEventListener("DOMContentLoaded", event => {
  if(navigator.serviceWorker) {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => console.log("Service Worker is registered." ,registration))
      .catch(e => console.log("Service Worker registration failed.", e));
  }
});
