export function loadCSS(file) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    link.onload = () => resolve(`CSS file loaded: ${file}`);
    link.onerror = () => reject(new Error(`Failed to load CSS file: ${file}`));
    document.head.appendChild(link);
  });
}