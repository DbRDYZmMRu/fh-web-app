
import { store } from "../../global.js";
let templates = {
  body: {
    template: `<p id="innerBody">New HTML content at ${store.route} </p>`,
  },
  innerBody: {
    template: `<span>Inner body content</span>`,
  },
  newItem: {
    template: `<p>New item added</p>`,
  },
};

export function addTemplate(templateId, templateHtml) {
  templates[templateId] = {
    template: templateHtml,
  };
  store.pageComponents.push(templateId);
}

export { templates };
