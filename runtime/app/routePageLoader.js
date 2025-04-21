import { store } from "../../global.js";
import { addTemplate } from "./templates.js";
import { renderComponents } from "./renderTemplate.js";

export function routePageLoader(routerViewData) {
  const routerView = document.getElementById("routerView");
  routerView.innerHTML += routerViewData;
  
}