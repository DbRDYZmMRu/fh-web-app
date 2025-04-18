import { createApp } from "./lib/petite-vue.js";
import { initializeApp } from "./runtime/app/init.js";

// Initialize the app
const appConfig = initializeApp();

// Mount the app globally
createApp(appConfig).mount();