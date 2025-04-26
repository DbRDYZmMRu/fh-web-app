import page from "../lib/page.mjs.js";
import { baseMiddleware } from "./middleware/baseMiddleware.js";
import { routePrep } from "./middleware/loadData.js";
import { store } from "../global.js";






/**
 * Initializes the router with middleware.
 */
export function initializeRouter() {
  page("/index.html", () => {
    page.redirect("/home");
  });
  
  page("/home", baseMiddleware, () => {
    console.log("Navigated to home");
  });
  
  page("/reader", baseMiddleware, () => {
    console.log("Navigated to reader");
  });
  
  page("/musicpool", baseMiddleware, () => {
    
    console.log("Navigated to musicpool");
  });
  
  page("/blog", baseMiddleware, () => {
    console.log("Navigated to blog");
  });
  
  page("/discover", baseMiddleware, () => {
    console.log("Navigated to discover");
  });
  
  page("/cookies", baseMiddleware, () => {
    console.log("Navigated to cookies");
  });
  
  page("/notFound", baseMiddleware, () => {
    console.log("Navigated to notFound");
  });
  
  
  // Fallback for undefined routes
  page("*", () => {
    console.warn("Undefined route accessed. Redirecting to 404 Not Found Page (/notFound)");
    page.redirect("/notFound");
  });
  
  // Start the router
  page.start();
  
  // Add a navigate function to the store for programmatic routing
  store.path = (path) => {
    page(path);
  };
  
  console.log("Router initialized.");
}