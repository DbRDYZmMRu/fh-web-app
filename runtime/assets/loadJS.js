export function loadJS(file) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    script.onload = () => resolve(`JS file loaded: ${file}`);
    script.onerror = () => reject(new Error(`Failed to load JS file: ${file}`));
    document.body.appendChild(script);
  });
}