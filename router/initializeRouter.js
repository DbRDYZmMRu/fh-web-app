import page from "../lib/page.mjs.js";
import { baseMiddleware } from "./middleware/baseMiddleware.js";
import { loadData } from "./middleware/loadData.js";
import { store } from "../global.js";






/**
 * Initializes the router with middleware.
 */
export function initializeRouter() {
  console.log("Navigated to Reader");
  page("/", () => {
    page.redirect("/home");
  });
  
  page("/home", baseMiddleware, () => {
    
  });
  
  page("/albums", baseMiddleware, () => {
    
  });
  
  
  page("/reader", baseMiddleware, () => {
    console.log("Navigated to Reader");
  });
  
  page("/upcoming", loadData, baseMiddleware, () => {
    console.log("Navigated to Upcoming Events");
  });
  
  page("/musicpool", baseMiddleware, () => {
    console.log("Navigated to Music Pool");
  });
  
  
  
  // Fallback for undefined routes
  page("*", () => {
    console.warn("Undefined route accessed. Redirecting to Home Page (/home)");
    page.redirect("/home");
  });
  
  // Start the router
  page.start();
  
  // Add a navigate function to the store for programmatic routing
  store.path = (path) => {
    page(path);
  };
  
  console.log("Router initialized.");
}