import page from "../lib/page.mjs.js";
import { groupMiddleware } from "./middleware/groupMiddleware.js";
import { dynamicMiddleware } from "./middleware/dynamicMiddleware.js";
import { loadData } from "./middleware/loadData.js";
import { store } from "../global.js";
import { templates, addTemplate } from '../runtime/app/templates.js';



/**
 * Initializes the router with middleware.
 */
export function initializeRouter() {
  page("/", groupMiddleware, dynamicMiddleware, () => {
    // Initial render
    
    
    console.log("Navigated to Home");
  });
  
  page("/home", loadData, groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/reader", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Reader");
  });
  
  page("/upcoming", loadData, groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Upcoming Events");
  });
  
  page("/musicpool", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Music Pool");
  });
  
  // Fallback for undefined routes
  page("*", () => {
    console.warn("Undefined route accessed. Redirecting to Index Page (/)");
    page.redirect("/");
  });
  
  // Start the router
  page.start();
  
  // Add a navigate function to the store for programmatic routing
  store.path = (path) => {
    
    page(path);
  };
  
  console.log("Router initialized.");
}