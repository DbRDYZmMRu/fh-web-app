import { loadCSS, loadJS } from "../../runtime/assets/index.js";
import { store } from "../../global.js";
import { fetchTemplate } from "./resourceManager.js";



/**
 * Middleware to handle route-specific resources.
 */
export async function dynamicMiddleware(ctx, next) {
  const envConfig = await fetchEnvConfig();
  if (!envConfig) return next();
  
  const routeConfig = envConfig.routes[ctx.pathname];
  if (!routeConfig) {
    console.warn(`No route configuration found for: ${ctx.pathname}`);
    return next();
  }
  
  // Load route-specific assets
  const routeCssFiles = routeConfig.cssFiles || [];
  const routeJsFiles = routeConfig.jsFiles || [];
  
  if (routeCssFiles.length > 0) {
    routeCssFiles.forEach((file) => loadCSS(file, store.BASE_URL));
    store.cssFiles.push(...routeCssFiles);
  }
  if (routeJsFiles.length > 0) {
    routeJsFiles.forEach((file) => loadJS(file, store.BASE_URL));
    store.jsFiles.push(...routeJsFiles);
  }
  
  

  

  
  console.log(`Route resources loaded for route: ${ctx.pathname}`);
  next();
}

/**
 * Fetches the route and group configurations from `env.json`.
 */
async function fetchEnvConfig() {
  try {
    const response = await fetch("../../env.json");
    const config = await response.json();
    return config;
  } catch (error) {
    console.error("Failed to load env.json:", error);
    return null;
  }
}