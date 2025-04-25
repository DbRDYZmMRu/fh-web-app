export function setupLoader() {
  const loader = document.querySelector('.template-loader');
  loader.style.display = 'block'; // Show the loader
  if (loader) {
    setTimeout(() => {
      // Show the body
      document.body.style.display = '';
    }, 1000); // 1000ms = 1s delay
    
    setTimeout(() => {
      // Hide the loader
      loader.style.display = 'none';
    }, 4000); // 3000ms = 4s delay
  }
  
  
  // Close the navigation bar if it's open
  const navbarCollapse = document.getElementById('navbar-menu');
  
  if (navbarCollapse.classList.contains('show')) {
    const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
    collapseInstance.hide();
  }
}