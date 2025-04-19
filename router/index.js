import page from "../lib/page.mjs.js";
import { store } from "../global.js";
import {
  loadCSS,
  loadJS,
  unloadCSS,
  unloadJS,
  loadSingleOrArray,
  unloadSingleOrArray
} from "../runtime/assets/index.js";







// Example CSS and JS files
const cssFiles = ["../assets/css/style.css"];
const jsFiles = ["../assets/js/jquery.js", "../assets/js/app.js", "../assets/js/vendors.js"];


// Function to initialize the router
export function initializeRouter() {
  // Define routes
  page("/", () => {
    console.log("Navigated to Home");
    store.route = "home"; // Update the store's route state
  });
  page("/home", () => {
    // Example of loading CSS files
    loadSingleOrArray(cssFiles, loadCSS);
    loadSingleOrArray(jsFiles, loadJS);
    store.route = "home";
  });
  
  page("/reader", () => {
    store.route = "reader";
  });
  
  page("/upcoming", () => {
    store.route = "upcoming";
  });
  
  page("/musicpool", () => {
// Example of unloading CSS files
unloadSingleOrArray(cssFiles, unloadCSS);

// Example of unloading JS files
unloadSingleOrArray(jsFiles, unloadJS);
    store.route = "musicpool";
  });
  
  page("/cookies", () => {
    store.route = "cookies";
  });
  
  page("/bio", () => {
    store.route = "bio";
  });
  
  page("/login", () => {
    store.route = "login";
  });
  
  // Start the router
  page.start();
  
  // Add a navigate function to the store for programmatic routing
  store.path = (path) => {
    page(path);
  };
  
  // Expose the router globally for debugging (optional)
  window.page = page;
}