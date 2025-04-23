import { loadCSS, loadJS } from "../runtime/assets/index.js";
import { store } from "../global.js";

/**
 * Middleware to load shared resources for a route group.
 */
export async function baseMiddleware(ctx, next) {
  const envConfig = await fetchEnvConfig();
  if (!envConfig) return next(); // Proceed if `env.json` fails to load
  
  const routeConfig = envConfig.routes[ctx.pathname];
  if (!routeConfig) {
    console.warn(`No route configuration found for: ${ctx.pathname}`);
    return next();
  }
  
  const groupConfig = envConfig.routeGroups[routeConfig.group];
  if (!groupConfig) {
    console.warn(`No group configuration found for: ${routeConfig.group}`);
    return next();
  }
  
  // Load shared group assets (CSS and JS)
  const groupCssFiles = groupConfig.cssFiles || [];
  const groupJsFiles = groupConfig.jsFiles || [];
  
  // Load only missing group assets
  const missingGroupCssFiles = groupCssFiles.filter((file) => !store.cssFiles.includes(file));
  const missingGroupJsFiles = groupJsFiles.filter((file) => !store.jsFiles.includes(file));
  
  if (missingGroupCssFiles.length > 0) {
    missingGroupCssFiles.forEach((file) => loadCSS(file, store.BASE_URL));
  }
  if (missingGroupJsFiles.length > 0) {
    missingGroupJsFiles.forEach((file) => loadJS(file, store.BASE_URL));
  }
  
  // Update the store with group-level assets
  store.cssFiles = [...new Set([...store.cssFiles, ...groupCssFiles])];
  store.jsFiles = [...new Set([...store.jsFiles, ...groupJsFiles])];
  
  console.log(`Group resources loaded for group: ${routeConfig.group}`);
  next();
}

/**
 * Fetches the route and group configurations from `env.json`.
 */
async function fetchEnvConfig() {
  try {
    const response = await fetch("/env.json");
    const config = await response.json();
    return config;
  } catch (error) {
    console.error("Failed to load env.json:", error);
    return null;
  }
}