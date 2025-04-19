export async function unloadCSS(file, baseUrl = "") {
  const resolvedUrl = new URL(file, `${window.location.origin}${baseUrl}`).href; // Normalize the URL
  const links = document.querySelectorAll(`link[rel="stylesheet"][href="${resolvedUrl}"]`);
  links.forEach((link) => {
    link.parentNode.removeChild(link);
    console.log(`CSS file unloaded: ${resolvedUrl}`);
  });
  
  if (links.length === 0) {
    console.warn(`CSS file not found: ${resolvedUrl}`);
  }
}