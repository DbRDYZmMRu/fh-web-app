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

// Function to initialize the router
export function initializeRouter() {
  // Define routes
  page("/", () => {
    console.log("Navigated to Home");
    store.route = "home"; // Update the store's route state
  });
  page("/home", () => {
    // Example of loading CSS files
    loadSingleOrArray(store.cssFiles, loadCSS, store.BASE_URL);
    loadSingleOrArray(store.jsFiles, loadJS, store.BASE_URL);
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
unloadSingleOrArray(store.cssFiles, unloadCSS, store.BASE_URL);

// Example of unloading JS files
unloadSingleOrArray(store.jsFiles, unloadJS, store.BASE_URL);
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