
import { createApp } from "../../lib/petite-vue.js";
import { store } from "../../global.js";
import { templates } from './templates.js';
import { baseDiv } from "./baseDiv.js";

export function renderComponents() {
  let html = '';
  Object.keys(templates).forEach((componentId) => {
    store.pageComponents.push(componentId);
    html += templates[componentId].template;
  });
  store.pageComponents = [...new Set(store.pageComponents)];
  baseDiv.innerHTML = html;

  // Create a Petite-Vue app instance and mount it to the baseDiv
  createApp({
    store
  }).mount(baseDiv);
}
