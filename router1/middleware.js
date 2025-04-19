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
 * Middleware to reload all assets for the current route.
 * It unloads all previous assets, then loads required assets for the new route.
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
  
  // Unload all previously loaded assets
  store.cssFiles.forEach((file) => unloadCSS(file, store.BASE_URL));
  store.jsFiles.forEach((file) => unloadJS(file, store.BASE_URL));
  
  // Load required assets for the new route
  if (requiredCssFiles.length > 0) {
    loadSingleOrArray(requiredCssFiles, loadCSS, store.BASE_URL);
  }
  if (requiredJsFiles.length > 0) {
    loadSingleOrArray(requiredJsFiles, loadJS, store.BASE_URL);
  }
  
  // Update the store with the new assets
  store.route = ctx.pathname;
  store.title = `${routeConfig.title} | ${groupConfig.titleTail || ""}`.trim();
  store.cssFiles = requiredCssFiles;
  store.jsFiles = requiredJsFiles;
  store.BASE_URL = envConfig.baseUrl || "";
  
  console.log(`All resources reloaded for route: ${ctx.pathname}`);
  next(); // Proceed to the next middleware or route handler
}