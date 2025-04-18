import page from "../lib/page.mjs.js";
import { store } from "../global.js";

// Function to initialize the router
export function initializeRouter() {
  // Define routes
  page("/", () => {
    console.log("Navigated to Home");
    store.route = "home"; // Update the store's route state
  });
  page("/home", () => {
    store.route = "home";
  });
  
  page("/reader", () => {
    store.route = "reader";
  });
  
  page("/upcoming", () => {
    store.route = "upcoming";
  });
  
  page("/musicpool", () => {
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