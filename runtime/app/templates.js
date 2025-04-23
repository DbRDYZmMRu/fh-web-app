
// This js file holds all of the default components that are loaded every time a route-path is visited. 

import { store } from "../../global.js";

import { pageLoader } from "../../assets/templates/components/pageLoader.js";
import { cookiesPrompt } from "../../assets/templates/components/cookiesPrompt.js";

import { header } from "../../assets/templates/layout/header.js";
import { routerView } from "../../assets/templates/layout/routerView.js";
import { footer } from "../../assets/templates/layout/footer.js";



let templates = {
  pageLoader: {
    template: pageLoader
  }, 
  header: {
    template: header
  },
  routerView: {
    template: routerView
  },
  footer: {
    template: footer
  }, 
  cookiesPrompt: {
    template: cookiesPrompt
  } 
  
};

export function addTemplate(templateId, templateHtml) {
  console.log(templateId);
  templates[templateId] = {
    template: templateHtml,
  };
  store.pageComponents.push(templateId);
  console.log(store.pageComponents)
}

export { templates };