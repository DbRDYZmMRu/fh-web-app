import { createApp } from "../../lib/petite-vue.js";
import { store } from "../../global.js";
import { addTemplate } from "./templates.js";
import { renderComponents } from "./renderTemplate.js";

export function routePageLoader(routeViewID, routerViewData) {
  const routerView = document.getElementById("routerView");
  routerView.innerHTML = "";
  routerView.innerHTML += routerViewData;
    // Create a Petite-Vue app instance and mount it to the baseDiv
  createApp({
    store
  }).mount(routerView);
}