import { store } from "../../../global.js";

export const header = `
  <!-- start header -->
  <header class="left-modern-header" id="navbar-menu">
    <div class="left-modern-sidebar header-light bg-white">
      <a class="navbar-brand section-link" href="demo-minimal-portfolio.html">
        <img src="images/demo-minimal-portfolio-logo-black.png" data-at2x="images/demo-minimal-portfolio-logo-black@2x.png" alt="" class="default-logo">
        <img src="images/demo-minimal-portfolio-logo-black.png" data-at2x="images/demo-minimal-portfolio-logo-black@2x.png" alt="" class="alt-logo">
        <img src="images/demo-minimal-portfolio-mobile-logo-black@2x.png" data-at2x="images/demo-minimal-portfolio-mobile-logo-black@2x.png" alt="" class="mobile-logo">
      </a>
      <div class="toggle-icon">
        <div class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span class="navbar-toggler-line"></span>
          <span class="navbar-toggler-line"></span>
          <span class="navbar-toggler-line"></span>
          <span class="navbar-toggler-line"></span>
        </div>
      </div>
      <div class="vertical-title">
        <div class="title elements-social social-icon-style-10">
          <ul class="extra-small-icon dark fw-600">
            <li><a class="facebook" href="https://www.facebook.com/" target="_blank">Fb.</a> </li>
            <li><a class="instagram" href="https://www.instagram.com/" target="_blank">Ig.</a></li>
            <li><a class="twitter" href="http://www.twitter.com" target="_blank">Tw.</a></li>
            <li><a class="behance" href="http://www.behance.com/" target="_blank">Be.</a> </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- start navigation -->
    <nav class="modern-sidebar-nav header-light bg-white">
      <div class="h-100">
        <div class="modern-side-menu" data-scroll-options='{ "theme": "light" }'>
          <ul class="menu-item-list alt-font fw-600 ls-minus-1px">
            <li class="menu-item">
              <a href="/home" class="nav-link">Home</a>
            </li>
            <li class="menu-item">
              <a href="/upcoming" class="nav-link">About</a>
            </li>
            <li class="menu-item">
              <a href="demo-minimal-portfolio-expertise.html" class="nav-link">Expertise</a>
            </li>
            <li class="menu-item">
              <a href="demo-minimal-portfolio-contact.html" class="nav-link">Contact</a>
            </li>
          </ul>
          <div class="mt-30">
            <span class="d-block lh-24 fs-15 w-95">Looking for collaboration for your next creative project?</span>
            <div class="mt-5px">
              <i class="bi bi-envelope me-5px align-middle"></i><a href="mailto:hello@domain.com" class="text-dark-gray-hover fw-600 align-middle">hello@domain.com</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- end header -->

`;