import { createApp } from "../../lib/petite-vue.js";
import { store } from "../../global.js";

// Attaches the default router-view container for holding the views of the route paths
export function routePageLoader(routeViewID, routerViewData) {
  const routerView = document.getElementById("routerView");
  //routerView.innerHTML = "";
  //routerView.innerHTML = routerViewData;
    // Create a Petite-Vue app instance and mount it to the baseDiv
  createApp({
    store
  }).mount(routerView);
}