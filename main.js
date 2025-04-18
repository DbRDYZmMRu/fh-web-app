import { createApp } from "./lib/petite-vue.js";
import { initDiv } from "./runtime/initDiv.js";
import { initializeApp } from "./runtime/init.js";

// Dynamically create the #app div
initDiv();

// Initialize the app
const appConfig = initializeApp();

// Mount the app globally
createApp(appConfig).mount();