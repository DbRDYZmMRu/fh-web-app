import { loadCSS } from "./loadCSS.js";
import { loadJS } from "./loadJS.js";

/**
 * Load files sequentially.
 * @param {Array} files - An array of file paths to load.
 * @param {Function} loader - Function to load a single file (e.g., loadCSS or loadJS).
 */
export async function loadFilesSequentially(files, loader, baseUrl = "") {
  try {
    for (const file of files) {
      console.log(`Attempting to load file: ${file}`);
      await loader(file, baseUrl); // Call the loader function for each file
      console.log(`File loaded successfully: ${file}`);
    }
    console.log("All files loaded sequentially.");
  } catch (error) {
    console.error("Error while loading files:", error.message);
  }
}

/**
 * Accepts either a single file or an array of files and loads them sequentially.
 * @param {string|Array} files - A single file path (string) or an array of file paths.
 * @param {Function} loader - Function to load a single file (e.g., loadCSS or loadJS).
 */
export async function loadSingleOrArray(files, loader, baseUrl = "") {
  if (!Array.isArray(files)) {
    files = [files]; // Convert single file to an array
  }
  await loadFilesSequentially(files, loader, baseUrl);
}