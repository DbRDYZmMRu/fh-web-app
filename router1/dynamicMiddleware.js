export async function dynamicMiddleware(ctx, next) {
  
  /**
   * Fetches the route and group configurations from `env.json`.
   */
  async function fetchEnvConfig() {
    try {
      const response = await fetch("/env.json");
      const config = await response.json();
      return config;
    } catch (error) {
      console.error("Failed to load env.json:", error);
      return null;
    }
  }
  
  const envConfig = await fetchEnvConfig();
  if (!envConfig) return next();
  
  const routeConfig = envConfig.routes[ctx.pathname];
  if (!routeConfig) {
    console.warn(`No route configuration found for: ${ctx.pathname}`);
    return next();
  }
  
  // Load route-specific assets
  const routeCssFiles = routeConfig.cssFiles || [];
  const routeJsFiles = routeConfig.jsFiles || [];
  
  const missingRouteCssFiles = routeCssFiles.filter((file) => !store.cssFiles.includes(file));
  const missingRouteJsFiles = routeJsFiles.filter((file) => !store.jsFiles.includes(file));
  
  if (missingRouteCssFiles.length > 0) {
    missingRouteCssFiles.forEach((file) => loadCSS(file, store.BASE_URL));
  }
  if (missingRouteJsFiles.length > 0) {
    missingRouteJsFiles.forEach((file) => loadJS(file, store.BASE_URL));
  }
  
  // Update the store with route-specific assets
  store.cssFiles = [...new Set([...store.cssFiles, ...routeCssFiles])];
  store.jsFiles = [...new Set([...store.jsFiles, ...routeJsFiles])];
  
  console.log(`Route resources loaded for route: ${ctx.pathname}`);
  next();
}