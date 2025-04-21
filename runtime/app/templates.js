import { store } from "../../global.js";
import { pageLoader } from "../../assets/templates/components/page-loader.js";
import { footer } from "../../assets/templates/layout/footer.js";
import { header } from "../../assets/templates/layout/header.js";

let templates = {
  pageLoader: {
    template: pageLoader
  },
  footer: {
    template: footer
  },
  header: {
    template: header
  },
};

export function addTemplate(templateId, templateHtml) {
  templates[templateId] = {
    template: templateHtml,
  };
  store.pageComponents.push(templateId);
}

export { templates };