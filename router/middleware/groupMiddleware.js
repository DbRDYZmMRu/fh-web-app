import { loadCSS, loadJS } from "../../runtime/assets/index.js";
import { unloadAllResources } from "./resourceManager.js";
import { loadTemplate } from "../../runtime/app/templateLoader.js";
import { store } from "../../global.js";

/**
 * Middleware to handle group-level resources and templates.
 */
export async function groupMiddleware(ctx, next) {
  const envConfig = await fetchEnvConfig();
  if (!envConfig) return next();
  
  const routeConfig = envConfig.routes[ctx.pathname];
  if (!routeConfig) return next();
  
  const groupConfig = envConfig.routeGroups[routeConfig.group];
  if (!groupConfig) return next();
  
  // Unload all previously loaded resources
  unloadAllResources();
  
  // Load shared group assets (CSS and JS)
  const groupCssFiles = groupConfig.cssFiles || [];
  const groupJsFiles = groupConfig.jsFiles || [];
  
  if (groupCssFiles.length > 0) {
    groupCssFiles.forEach((file) => loadCSS(file, store.BASE_URL));
    store.cssFiles.push(...groupCssFiles);
  }
  if (groupJsFiles.length > 0) {
    groupJsFiles.forEach((file) => loadJS(file, store.BASE_URL));
    store.jsFiles.push(...groupJsFiles);
  }
  
  // Dynamically load templates based on the group configuration
  if (groupConfig.headerTemplate) {
    loadTemplate(groupConfig.headerTemplate, "body-header");
  }
  if (groupConfig.footerTemplate) {
    loadTemplate(groupConfig.footerTemplate, "body-footer");
  }
  if (groupConfig.navigationTemplate) {
    loadTemplate(groupConfig.navigationTemplate, "body-navigation");
  }
  
  // Update the store with the new assets
  store.route = ctx.pathname;
  store.title = `${routeConfig.title} | ${groupConfig.titleTail || ""}`.trim();
  
  
  console.log(`Group resources loaded for group: ${routeConfig.group}`);
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