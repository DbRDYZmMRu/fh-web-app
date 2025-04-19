import { unloadCSS, unloadJS } from "../../runtime/assets/index.js";
import { store } from "../../global.js";

/**
 * Unload all currently loaded resources.
 */
export function unloadAllResources() {
  // Unload all CSS files
  store.cssFiles.forEach((file) => unloadCSS(file, store.BASE_URL));
  store.cssFiles = []; // Clear the store
  
  // Unload all JS files
  store.jsFiles.forEach((file) => unloadJS(file, store.BASE_URL));
  store.jsFiles = []; // Clear the store
  
  console.log("All resources unloaded.");
}