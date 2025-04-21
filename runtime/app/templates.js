import { store } from "../../global.js";
import { pageLoader } from "../../assets/templates/components/pageLoader.js";
import { footer } from "../../assets/templates/layout/footer.js";
import { header } from "../../assets/templates/layout/header.js";

let templates = {
  pageLoader: {
    template: pageLoader
  }, 
  header: {
    template: header
  },
  footer: {
    template: footer
  } 
};

export function addTemplate(templateId, templateHtml) {
  templates[templateId] = {
    template: templateHtml,
  };
  store.pageComponents.push(templateId);
}

export { templates };