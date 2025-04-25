import { createApp } from "../../lib/petite-vue.js";
import { store } from "../../global.js";
import { templates } from './templates.js';
import { baseDiv } from "./baseDiv.js";

// Renders the major components and the router-view for displaying route-path pages
export function renderComponents() {
  let html = '';
  Object.keys(templates).forEach((componentId) => {
    store.pageComponents.push(componentId);
    html += templates[componentId].template;
  });
  store.pageComponents = [...new Set(store.pageComponents)];
  baseDiv.innerHTML = html;
  //document.body.classList.add('left-modern-menu', 'custom-cursor');
  
  // Create a Petite-Vue app instance and mount it to the baseDiv
  createApp({
    store
  }).mount(baseDiv);
}