import { loadCSS, loadJS, unloadCSS, unloadJS, loadSingleOrArray } from "../runtime/assets/index.js";
import { store } from "../global.js";

/**
 * Fetches the route and group configurations from `env.json`.
 */
async function fetchEnvConfig() {
  try {
    const response = await fetch("/env.json"); // Adjust path if needed
    const config = await response.json();
    return config;
  } catch (error) {
    console.error("Failed to load env.json:", error);
    return null;
  }
}

/**
 * Middleware to dynamically manage assets for the current route.
 * It removes unnecessary assets (from the DOM and `store`), loads missing ones, and updates the `store`.
 */
export async function dynamicMiddleware(ctx, next) {
  const envConfig = await fetchEnvConfig();
  if (!envConfig) return next(); // Proceed if env.json fails to load
  
  const routeConfig = envConfig.routes[ctx.pathname];
  if (!routeConfig) {
    console.warn(`No route configuration found for: ${ctx.pathname}`);
    return next();
  }
  
  // Get group assets if any
  const groupConfig = envConfig.routeGroups[routeConfig.group] || { cssFiles: [], jsFiles: [] };
  
  // Merge group and route-specific assets
  const requiredCssFiles = [...new Set([...groupConfig.cssFiles, ...routeConfig.cssFiles])];
  const requiredJsFiles = [...new Set([...groupConfig.jsFiles, ...routeConfig.jsFiles])];
  
  // Unload unnecessary assets and clean the DOM
  const cssToUnload = store.cssFiles.filter((file) => !requiredCssFiles.includes(file));
  const jsToUnload = store.jsFiles.filter((file) => !requiredJsFiles.includes(file));
  
  cssToUnload.forEach((file) => unloadCSS(file, store.BASE_URL)); // Removes <link> from the DOM
  jsToUnload.forEach((file) => unloadJS(file, store.BASE_URL)); // Removes <script> from the DOM
  
  // Determine missing assets
  const missingCssFiles = requiredCssFiles.filter((file) => !store.cssFiles.includes(file));
  const missingJsFiles = requiredJsFiles.filter((file) => !store.jsFiles.includes(file));
  
  // Load missing assets
  if (missingCssFiles.length > 0) {
    loadSingleOrArray(missingCssFiles, loadCSS, store.BASE_URL);
  }
  if (missingJsFiles.length > 0) {
    loadSingleOrArray(missingJsFiles, loadJS, store.BASE_URL);
  }
  
  // Update the store with the new assets
  store.route = ctx.pathname;
  store.title = `${routeConfig.title} | ${groupConfig.titleTail || ""}`.trim();
  store.cssFiles = requiredCssFiles;
  store.jsFiles = requiredJsFiles;
  store.BASE_URL = envConfig.baseUrl || "";
  
  console.log(`Assets updated and DOM cleaned for route: ${ctx.pathname}`);
  next(); // Proceed to the next middleware or route handler
}