import { unloadCSS, unloadJS } from "../../runtime/assets/index.js";
import { store } from "../../global.js";

/**
 * Unload all currently loaded resources.
 */
export function unloadAllResources() {
  document.querySelectorAll("link[rel='stylesheet']").forEach((link) => link.remove());
  document.querySelectorAll("script").forEach((script) => script.remove());
}