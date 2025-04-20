import { unloadCSS } from "./unloadCSS.js";
import { unloadJS } from "./unloadJS.js";

/**
 * Load files sequentially.
 * @param {Array} files - An array of file paths to unload.
 * @param {Function} loader - Function to unload a single file (e.g., unloadCSS or unloadJS).
 */
export async function unloadFilesSequentially(files, unloader, baseUrl = "") {
  try {
    for (const file of files) {
      console.log(`Attempting to unload file: ${file}`);
      await unloader(file, baseUrl); // Call the unloader function for each file
      console.log(`File unloaded successfully: ${file}`);
    }
    console.log("All files unloaded sequentially.");
  } catch (error) {
    console.error("Error while unloading files:", error.message);
  }
}

  /**
 * Accepts either a single file or an array of files and unloads them sequentially.
 * @param {string|Array} files - A single file path (string) or an array of file paths.
 * @param {Function} loader - Function to unload a single file (e.g., loadCSS or loadJS).
 */
export async function unloadSingleOrArray(files, unloader, baseUrl = "") {
  if (!Array.isArray(files)) {
    files = [files]; // Convert single file to an array
  }
  await unloadFilesSequentially(files, unloader, baseUrl);
}