import { loadCSS, loadJS, unloadCSS, unloadJS, loadSingleOrArray, unloadSingleOrArray } from "../runtime/assets/index.js";
import { store } from "../global.js";

/**
 * Middleware to load assets (CSS/JS) for a route.
 * It loads CSS and JS files defined in `store.cssFiles` and `store.jsFiles`, using the `store.BASE_URL` as the base URL.
 */
export function loadAssetsMiddleware(ctx, next) {
  try {
    if (store.cssFiles && store.cssFiles.length > 0) {
      loadSingleOrArray(store.cssFiles, loadCSS, store.BASE_URL);
    }
    if (store.jsFiles && store.jsFiles.length > 0) {
      loadSingleOrArray(store.jsFiles, loadJS, store.BASE_URL);
    }
    console.log("Assets loaded for the route.");
  } catch (error) {
    console.error("Error loading assets:", error);
  }
  next(); // Proceed to the next middleware or route handler
}

/**
 * Middleware to unload assets (CSS/JS) for a route.
 * It unloads CSS and JS files defined in `store.cssFiles` and `store.jsFiles`, using the `store.BASE_URL` as the base URL.
 */
export function unloadAssetsMiddleware(ctx, next) {
  try {
    if (store.cssFiles && store.cssFiles.length > 0) {
      unloadSingleOrArray(store.cssFiles, unloadCSS, store.BASE_URL);
    }
    if (store.jsFiles && store.jsFiles.length > 0) {
      unloadSingleOrArray(store.jsFiles, unloadJS, store.BASE_URL);
    }
    console.log("Assets unloaded for the route.");
  } catch (error) {
    console.error("Error unloading assets:", error);
  }
  next(); // Proceed to the next middleware or route handler
}