import { store } from "../global.js";
import { routePageLoader } from '../runtime/app/routePageLoader.js';

// This function gets the current route resources, it essentially gets the current route-path's view data's reference link and identifying key.
export function routeFilter() {
  const currentRoute = store.route;
  const matchingResource = Object.entries(store.resources).find(([key, resource]) => resource.path === currentRoute);
  if (matchingResource) {
    return {
      resourceName: matchingResource[0],
      viewPrimary: matchingResource[1].view.primary
    };
  }
  return {};
}


// This function gets the data with the reference link provided, using the key to access the module holding the template 
export async function routePageData() {
  try {
    const routeFilterData = routeFilter();
    const routeViewID = routeFilterData.resourceName;
    const routerViewData = routeFilterData.viewPrimary;
    
    const viewModule = await import(routerViewData);
    const viewData = viewModule[routeViewID];
    store.routeView = viewModule;
    routePageLoader(routeViewID, viewData);
  } catch (error) {
    console.error(`Error processing view data: ${error}`);
  }
}