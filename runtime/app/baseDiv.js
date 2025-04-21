import { store } from "../../global.js";
import { templates } from './templates.js';

// Create the base div
export const baseDiv = document.createElement('div');
baseDiv.id = 'body';
document.body.appendChild(baseDiv);

export function renderComponents() {
  let html = '';
  Object.keys(templates).forEach((componentId) => {
    store.pageComponents.push(componentId);
    html += templates[componentId].template;
  });
  store.pageComponents = [...new Set(store.pageComponents)];
  baseDiv.innerHTML = html;
}


