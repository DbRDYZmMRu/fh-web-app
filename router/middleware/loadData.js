import { store } from "../../global.js";
export function loadData(ctx, next) {
  if (store.renderCount == 1) {
    document.body.style.display = 'none';
    const loader = document.querySelector('.template-loader');
    if (true) {
      setTimeout(() => {
        // Hide the body
        document.body.style.display = '';
      }, 2000); // 1000ms = 1s delay
      loader.style.display = 'block'; // Show the loader
      setTimeout(() => {
        // Hide the loader
        loader.style.display = 'none';
      }, 3000); // 3000ms = 3s delay
    }
  }
  
  // Close the navigation bar if it's open
  const navbarCollapse = document.getElementById('navbar-menu');
  
  if (navbarCollapse.classList.contains('show')) {
    const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
    collapseInstance.hide();
  }
  next();
}

export function routePrep(ctx, next) {
  //document.body.classList.add('left-modern-menu', 'custom-cursor');
}