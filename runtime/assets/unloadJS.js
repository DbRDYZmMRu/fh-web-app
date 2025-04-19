export function unloadJS(file, baseUrl) {
  const fullPath = `${baseUrl}${file}`;
  const scriptElements = document.querySelectorAll(`script[src="${fullPath}"]`);
  
  scriptElements.forEach((script) => script.remove()); // Remove the <script> element from the DOM
  console.log(`Unloaded JS: ${fullPath}`);
}