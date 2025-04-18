import { createApp } from "./lib/petite-vue.js";
import { initDiv } from "./runtime/app/initDiv.js";
import { initializeApp } from "./runtime/app/init.js";

// Dynamically create the #app div
initDiv();

// Initialize the app
const appConfig = initializeApp();

// Mount the app globally
createApp(appConfig).mount();