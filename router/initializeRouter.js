import page from "../lib/page.mjs.js";
import { groupMiddleware } from "./middleware/groupMiddleware.js";
import { dynamicMiddleware } from "./middleware/dynamicMiddleware.js";
import { store } from "../global.js";
import { templates, addTemplate } from '../runtime/app/templates.js';
import {renderComponents} from "../runtime/app/baseDiv.js";

/**
 * Initializes the router with middleware.
 */
export function initializeRouter() {
  page("/", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/home", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Home");
  });
  
  page("/reader", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Reader");
  });
  
  page("/upcoming", groupMiddleware, dynamicMiddleware, () => {
    const templateId = "upcoming-section";
    const templateHtml = `    <h2>Dynamic HTML Block</h2>
    <p>This is a paragraph of text.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
`;
    addTemplate(templateId, templateHtml);
    renderComponents();
      
        console.log("Navigated to Upcoming Events");
  });
  
  page("/musicpool", groupMiddleware, dynamicMiddleware, () => {
    console.log("Navigated to Music Pool");
  });
  
  // Fallback for undefined routes
  page("*", () => {
    console.warn("Undefined route accessed. Redirecting to Index Page (/)");
    page.redirect("/");
  });
  
  // Start the router
  page.start();
  
  // Add a navigate function to the store for programmatic routing
  store.path = (path) => {
    page(path);
  };
  
  console.log("Router initialized.");
}