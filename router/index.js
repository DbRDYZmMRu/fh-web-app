import page from "../lib/page.mjs.js";
import { dynamicMiddleware } from "./middleware.js";
import { store } from "../global.js";

// Function to initialize the router
export function initializeRouter() {
  // Define routes with dynamic middleware
  page("/", dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/home", dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/reader", dynamicMiddleware, () => {
    console.log("Navigated to Reader");
  });
  
  page("/upcoming", dynamicMiddleware, () => {
    console.log("Navigated to Upcoming Events");
  });
  
  page("/musicpool", dynamicMiddleware, () => {
    console.log("Navigated to Music Pool");
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