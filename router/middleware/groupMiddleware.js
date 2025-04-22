import { loadCSS, loadJS } from "../../runtime/assets/index.js";
import { unloadAllResources, fetchTemplate } from "./resourceManager.js";
import { store } from "../../global.js";
import { renderComponents } from "../../runtime/app/renderTemplate.js";
import { pageLoader } from "../../../assets/templates/components/pageLoader.js";
import { routePageLoader } from '../../runtime/app/routePageLoader.js';






import { albumsPageID, albumsPage } from "../../../assets/templates/route/albumsPage.js";





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
  
  
  console.log("groupCssFiles", groupCssFiles);
  
  if (groupCssFiles.length > 0 && groupCssFiles != store.cssFiles) {
    try {
      for (const file of groupCssFiles) {
        await loadCSS(file, store.BASE_URL);
      }
      store.cssFiles.push(...groupCssFiles);
      
    } catch (error) {
      console.error('Error loading CSS files:', error);
    }
  }
  
  if (store.myCount == 0) {
    renderComponents();
  }
  
  routePageLoader(albumsPageID, albumsPage);
  
  
  
  
  if (groupJsFiles.length > 0 && groupJsFiles != store.jsFiles && store.myCount == 0) {
    try {
      for (const file of groupJsFiles) {
        await loadJS(file, store.BASE_URL);
      }
      store.jsFiles.push(...groupJsFiles);
      store.myCount += 1;
      
    } catch (error) {
      console.error('Error loading JS files:', error);
    }
  }
  
  console.log("store cssFiles", store.cssFiles);
  console.log(store);
  
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