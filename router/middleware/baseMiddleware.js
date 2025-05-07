import { loadCSS, loadJS } from "../../runtime/assets/index.js";
import { unloadAllResources, fetchTemplate } from "./resourceManager.js";
import { store } from "../../global.js";
import { renderComponents } from "../../runtime/app/renderTemplate.js";
import { setupLoader } from "../../assets/js/helpers/loader.js";
import { pageLoader } from "../../../assets/templates/components/pageLoader.js";
import { routePageLoader } from '../../runtime/app/routePageLoader.js';

import { routePageData } from "../routeFilter.js";








/**
 * Middleware to handle group-level resources and templates.
 */
export async function baseMiddleware(ctx, next) {
  
  //Hide the page's content as the DOM loads
  //document.body.style.display = 'none';
  
  // Assign the store's route key the current path value
  store.route = ctx.pathname;
  
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
  
  // Load route-specific assets
  const routeCssFiles = routeConfig.cssFiles || [];
  const routeJsFiles = routeConfig.jsFiles || [];
  
  if (groupCssFiles.length > 0) {
    try {
      for (const file of groupCssFiles) {
        await loadCSS(file, store.BASE_URL);
      }
      store.cssFiles.push(...groupCssFiles);
      
    } catch (error) {
      console.error('Error loading group CSS files:', error);
    }
  }
  
  if (routeCssFiles.length > 0) {
    routeCssFiles.forEach((file) => loadCSS(file, store.BASE_URL));
    store.cssFiles.push(...routeCssFiles);
  }
  
  if (store.renderCount == 0) {
    // Render the layout components
    renderComponents();
  }
  
  
  //Load the router path content just before the JS is loaded
  routePageData();
  
  // Now that the DOM is ready, add a loading animation 
  setupLoader();
  
  if (groupJsFiles.length > 0 && store.renderCount == 0) {
    try {
      for (const file of groupJsFiles) {
        await loadJS(file, store.BASE_URL);
      }
      store.jsFiles.push(...groupJsFiles);
      store.renderCount += 1;
      
    } catch (error) {
      console.error('Error loading JS files:', error);
    }
  }
  
  if (routeJsFiles.length > 0 && store.renderCount == 0) {
    routeJsFiles.forEach((file) => loadJS(file, store.BASE_URL));
    store.jsFiles.push(...routeJsFiles);
  }
  
  
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