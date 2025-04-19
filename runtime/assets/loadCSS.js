export function loadCSS(file, baseUrl = "") {
  return new Promise((resolve, reject) => {
    const resolvedUrl = new URL(file, `${window.location.origin}${baseUrl}`).href; // Normalize the URL
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = resolvedUrl; // Use the resolved URL
    link.onload = () => resolve(`CSS file loaded: ${resolvedUrl}`);
    link.onerror = () => reject(new Error(`Failed to load CSS file: ${resolvedUrl}`));
    document.head.appendChild(link);
  });
}