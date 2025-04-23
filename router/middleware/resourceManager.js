/**
 * Unload all currently loaded resources.
 */
export function unloadAllResources() {
  document.querySelectorAll("link[rel='stylesheet']").forEach((link) => link.remove());
  // document.querySelectorAll("script").forEach((script) => script.remove());
}

export async function fetchTemplate(url) {
  const response = await fetch(url);
  return response.ok ? response.text() : `<p>Error loading template: ${url}</p>`;
}