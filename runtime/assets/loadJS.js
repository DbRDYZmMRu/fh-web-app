export function loadJS(file, baseUrl = "") {
  return new Promise((resolve, reject) => {
    const resolvedUrl = new URL(file, `${window.location.origin}${baseUrl}`).href; // Normalize the URL
    const script = document.createElement("script");
    script.src = resolvedUrl; // Use the resolved URL
    script.type = "text/javascript";
    script.async = false;
    script.onload = () => resolve(`JS file loaded: ${resolvedUrl}`);
    script.onerror = () => reject(new Error(`Failed to load JS file: ${resolvedUrl}`));
    document.body.appendChild(script);
  });
}







