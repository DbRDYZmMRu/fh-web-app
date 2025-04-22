import { store } from "../global.js";
import { routePageLoader } from '../runtime/app/routePageLoader.js';

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


export async function routePageData() {
  try {
    const routeFilterData = routeFilter();
    const routeViewID = routeFilterData.resourceName;
    console.log(routeViewID);
    const routerViewData = routeFilterData.viewPrimary;
    
    const viewModule = await import(routerViewData);
    const viewData = viewModule[routeViewID];
    const result = routePageLoader(routeViewID, viewData);
console.log(result);
return result;
  } catch (error) {
    console.error(`Error processing view data: ${error}`);
  }
  
  
  
}