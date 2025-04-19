export function unloadCSS(file, baseUrl) {
  const fullPath = `${baseUrl}${file}`;
  const linkElements = document.querySelectorAll(`link[rel="stylesheet"][href="${fullPath}"]`);
  
  linkElements.forEach((link) => link.remove()); // Remove the <link> element from the DOM
  console.log(`Unloaded CSS: ${fullPath}`);
}