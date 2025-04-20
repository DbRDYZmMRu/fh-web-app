import { store } from "../../global.js";

import { headerTemplate } from '../../assets/templates/layout/header.js';
import { navigationTemplate } from '../../assets/templates/layout/navigation.js';
import { footerTemplate } from '../../assets/templates/layout/footer.js';

const templates = {
  'body-header': headerTemplate,
  'body-navigation': navigationTemplate,
  'body-footer': footerTemplate,
};

export function initDiv() {
  const mainDiv = `
    <div id="body">
      <!-- Header Section -->
      <div id="body-header"></div>
      <!-- Navigation Section -->
      <div id="body-navigation"></div>
      <!-- Main Content Section -->
      <div id="body-main">
        <main id="main-content">
          <!-- Dynamic content will be inserted here based on routes -->
        </main>
      </div>
      <!-- Footer Section -->
      <div id="body-footer"></div>
    </div>
   
  `;
  document.body.innerHTML += mainDiv;

  Object.keys(templates).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = templates[id]();
    }
  });
}
