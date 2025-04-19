import { store } from "../../store/index.js";
import { initDiv } from "./initDiv.js";
import { initializeRouter } from "../../router/initializeRouter.js";

// Function to initialize the app's global state
export function initializeApp() {
  // Dynamically create the #app div
  initDiv();
  
  const router = initializeRouter(); // Initialize the router
  
  return {
    store, // Attach the store to the app
    router, // Attach the router to the app (optional, for advanced use)
  };
}