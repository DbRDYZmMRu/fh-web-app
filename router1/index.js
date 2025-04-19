import page from "../lib/page.mjs.js";
import { groupMiddleware } from "./groupMiddleware.js";
import { dynamicMiddleware } from "./dynamicMiddleware.js";
import { store } from "../global.js";

// Function to initialize the router
export function initializeRouter() {
  // Define routes with group and dynamic middleware
  page("/", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/home", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/reader", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Reader");
  });
  
  page("/upcoming", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Upcoming Events");
  });
  
  page("/musicpool", groupMiddleware, dynamicMiddleware, () => {
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