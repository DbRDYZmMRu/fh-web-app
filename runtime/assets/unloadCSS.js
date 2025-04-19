export async function unloadCSS(file) {
  const links = document.querySelectorAll(`link[rel="stylesheet"][href="${file}"]`);
  links.forEach((link) => {
    link.parentNode.removeChild(link);
    console.log(`CSS file unloaded: ${file}`);
  });
  
  if (links.length === 0) {
    console.warn(`CSS file not found: ${file}`);
  }
}