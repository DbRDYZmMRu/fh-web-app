export async function unloadJS(file, baseUrl = "") {
  const resolvedUrl = new URL(file, `${window.location.origin}${baseUrl}`).href; // Normalize the URL
  const scripts = document.querySelectorAll(`script[src="${resolvedUrl}"]`);
  scripts.forEach((script) => {
    script.parentNode.removeChild(script);
    console.log(`JS file unloaded: ${resolvedUrl}`);
  });
  
  if (scripts.length === 0) {
    console.warn(`JS file not found: ${resolvedUrl}`);
  }
}