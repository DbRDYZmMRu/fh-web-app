import { store } from "../../global.js";
import { pageLoader } from "../../assets/templates/components/pageLoader.js";
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