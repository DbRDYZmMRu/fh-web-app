export async function unloadJS(file) {
  const scripts = document.querySelectorAll(`script[src="${file}"]`);
  scripts.forEach((script) => {
    script.parentNode.removeChild(script);
    console.log(`JS file unloaded: ${file}`);
  });
  
  if (scripts.length === 0) {
    console.warn(`JS file not found: ${file}`);
  }
}