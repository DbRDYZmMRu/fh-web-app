(function($) {
  
  "use strict";
  /* ===================================
   Change variables value as per your need 
   ====================================== */
  
  var menuBreakPoint = 991;
  var sliderBreakPoint = 991; // It will effect when you have used attribute "data-thumb-slider-md-direction" OR "data-slider-md-direction"
  var animeBreakPoint = 1199;
  var headerTransition = 300; // Header transition effect time
  
  /* ===================================
   Touch device
   ====================================== */
  
  var isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  if (isTouchDevice) {
    $('body').addClass('is-touchable');
  }
  
  /* ===================================
   Don't change variables value
   ====================================== */
  
  var lastScroll = 0,
    simpleDropdown = 0,
    linkDropdown = 0,
    isotopeObjs = [],
    swiperObjs = [];
  var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  /* ===================================
   Check for browser OS
   ====================================== */
  
  var isMobile = false,
    isiPhoneiPad = false,
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
  }
  
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    isiPhoneiPad = true;
  }
  
  /* ===================================
   jQuery appear
   ====================================== */
  
  $('.vertical-counter, .counter, .progress-bar, .pie-chart-style-01, .attractive-hover, .splitting-animation, .section-dark, footer, [data-anime], [data-fancy-text]').each(function() {
    $(this).appear().trigger('resize');
  });
  
  initScrollNavigate();
  slideboxstyle();
  animateCounters();
  setSpaceInTeamStyle();
  setSpaceInInteractiveBannerStyle();
  setOverLayerPosition();
  setBottomOverLayerPosition(2000);
  setupSwiper();
  
  // Sticky left menu
  if ($.fn.stick_in_parent !== undefined && $.fn.stick_in_parent !== null) {
    if ($('.left-sidebar-wrapper').length) {
      $('.left-sidebar-wrapper .left-sidebar-nav').stick_in_parent({
        recalc: 1
      });
    }
  }
  if (typeof $.fn.smoothScroll === 'function') {
    if ($('.header-reverse').length > 0) {
      $('.inner-link').smoothScroll({
        speed: 800,
        offset: -59,
        beforeScroll: function() {
          if ($('body').hasClass('left-menu-onepage')) {
            $('.left-modern-header').collapse('hide');
          }
          $('.navbar-collapse.collapse').collapse('hide');
        }
      });
    } else {
      if ($('.inner-link').length > 0) {
        var offset = 0
        if ($('nav.navbar').hasClass('disable-fixed')) {
          offset = 1;
        }
        
        if ($('.left-modern-menu').hasClass('left-menu-onepage')) {
          if (getWindowWidth() <= menuBreakPoint) {
            offset = -59;
          }
        }
        
        $('.inner-link').smoothScroll({
          speed: 800,
          offset: offset,
          beforeScroll: function() {
            if ($('body').hasClass('left-menu-onepage')) {
              $('.left-modern-header').collapse('hide');
            }
            
            if ($('body').hasClass('show-menu')) {
              $('html, body').removeClass('show-menu');
            }
            $('.navbar-collapse.collapse').collapse('hide');
          }
        });
      }
    }
    
    // Section link
    if ($('.section-link').length > 0) {
      $('.section-link').smoothScroll({
        speed: 900,
        offset: 1,
        beforeScroll: function() {
          $('.navbar-collapse.collapse').collapse('hide');
        }
      });
    }
  }
  
  $('.modern-side-menu .menu-item').on('click', function() {
    $('.modern-side-menu .menu-item').removeClass('active');
    $(this).addClass('active');
  });
  
  // Minimal portfolio 
  const sticky_container = document.querySelector(".sticky-image-distortion-wrapper");
  if (typeof(sticky_container) != 'undefined' && sticky_container != null) {
    let winsize;
    const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
    calcWinsize();
    window.addEventListener('resize', calcWinsize);
    
    class Menu {
      constructor() {
        this.DOM = {
          menu: document.querySelector('.sticky-image-distortion-wrapper nav.menu')
        };
        this.DOM.menuLinks = [...this.DOM.menu.querySelectorAll('.menu__link')];
        this.mousePos = { x: winsize.width / 2, y: winsize.height / 2 };
        this.lastMousePos = {
          translation: { x: winsize.width / 2, y: winsize.height / 2 },
          displacement: { x: 0, y: 0 }
        };
        this.dmScale = 0;
        this.current = -1;
        this.initEvents();
        requestAnimationFrame(() => this.render());
      }
      
      initEvents() {
        document.body.style.setProperty('--body-bgcolor', this.DOM.menuLinks[0].getAttribute("data-bg"))
        let active_item;
        this.DOM.menuLinks.forEach((item, i) => {
          let imgPath = item.getAttribute('data-img');
          let bgColor = item.getAttribute('data-bg');
          item.querySelector(".svg-wrapper").innerHTML = `
                         <svg class="distort" width="960" height="980" viewBox="0 0 960 980">
                             <filter id="distortionFilter${i}">
                                 <feTurbulence type="fractalNoise" baseFrequency="0.01 0.003" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
                                 <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
                             </filter>
                             <g filter="url(#distortionFilter${i})">
                                 <image class="distort__img" x="80" y="0" xlink:href="${imgPath}" height="980" width="960" />
                             </g>
                         </svg>
                     `
          const displaceMentEl = [...item.querySelectorAll('feDisplacementMap')]
          item.addEventListener('mouseenter', (e) => {
            item.closest(".menu").childNodes.forEach(item => item.classList && item.classList.remove("active"))
            item.classList.add("active");
            if (typeof TweenMax !== 'undefined' && typeof TweenMax !== null) {
              if (item !== active_item) {
                TweenMax.fromTo(displaceMentEl, 1.2, { attr: { scale: 50 } }, { attr: { scale: 0.3 } });
              }
            }
            document.body.style.setProperty('--body-bgcolor', bgColor)
            active_item = item;
          });
          
          item.addEventListener('mouseleave', (e) => {
            active_item = item;
          })
        });
      }
      render() {
        requestAnimationFrame(() => this.render());
      }
    }
    
    new Menu();
  }
  
  /* ===================================
   Mousetip on mouse move
   ====================================== */
  
  if (!isMobile) {
    $(document).on('mousemove', '.mousetip-wrapper', function(e) {
      var mouseX = e.pageX - $(this).offset().left + 20;
      var mouseY = e.pageY - $(this).offset().top + 20;
      $(this).find('.caption').show().css({
        top: mouseY,
        left: mouseX
      });
    });
  }
  
  
  /* ===================================
   Page loader
   ====================================== */
  
  const intervalId = setInterval(() => {
    const loader = $('.template-loader');
    if (loader.length > 0) {
      clearInterval(intervalId);
      loader.show(); // Show the loader
      setTimeout(() => {
        loader.css('display', 'none'); // Hide the loader
        // or loader.hide();
      }, 3000); // 3000ms = 3s delay
    }
  }, 100); // check every 100ms
  
  // Window scroll Function
  function initScrollNavigate() {
    
    var scrollPos = $(window).scrollTop();
    
    // One page navigation
    var menuLinks = $('.navbar-nav li a');
    menuLinks.each(function() {
      var _this = $(this);
      var hasPos = _this.attr('href').indexOf('#');
      if (hasPos > -1) {
        var res = _this.attr('href').substring(hasPos);
        if (res != '' && res != '#' && $(res).length) {
          var refElement = $(_this.attr('href'));
          if (refElement.position().top <= (scrollPos + 60) && refElement.position().top + refElement.height() > (scrollPos + 60)) {
            menuLinks.removeClass('active');
            _this.addClass('active');
          }
          if (scrollPos < 1) {
            _this.removeClass('active');
          }
        }
      }
    });
    
    // Sticky nav Start
    var navHeight = 0,
      miniHeaderHeight = 0;
    if ($('header nav.navbar').length) {
      navHeight = $('header nav.navbar').outerHeight();
    }
    if ($('.header-top-bar').length) {
      miniHeaderHeight = $('.header-top-bar').outerHeight();
    }
    var headerHeight = navHeight + miniHeaderHeight;
    if (!$('header').hasClass('no-sticky')) {
      if (scrollPos >= headerHeight) {
        $('header').addClass('sticky');
        if (!$('.header-top-bar').is(':hidden')) {
          $('.header-top-bar').css({ 'top': '-' + (miniHeaderHeight) + 'px' });
          $('.header-top-bar + .navbar').css({ 'top': '0px' });
        } else {
          $('.header-top-bar, .header-top-bar + .navbar').css({ 'top': '' });
        }
      } else if (scrollPos <= headerHeight) {
        $('header').removeClass('sticky');
        if (!$('.header-top-bar').is(':hidden')) {
          $('.header-top-bar').css({ 'top': '0px' });
          $('.header-top-bar + .navbar').css({ 'top': (miniHeaderHeight) + 'px' });
        } else {
          $('.header-top-bar, .header-top-bar + .navbar').css({ 'top': '' });
        }
      }
    }
    
    // Header sticky
    if (scrollPos > (headerHeight + 150)) {
      setTimeout(function() {
        $('header').addClass('sticky-active');
      }, headerTransition); // Header transition effect time
    }
    if (scrollPos < headerHeight) {
      setTimeout(function() {
        $('header').removeClass('sticky-active');
      }, headerTransition); // Header transition effect time
    }
    
    // Hide side menu on scroll
    if (scrollPos >= 200 && getWindowWidth() > menuBreakPoint) {
      
      // Close all dropdown menu
      $('.dropdown').trigger('mouseleave');
    }
    
    // Scroll to top
    if (scrollPos > 150) {
      $('.scroll-top-arrow').fadeIn('300');
    } else {
      $('.scroll-top-arrow').fadeOut('300');
    }
    
    if ($('nav.header-reverse-back-scroll').length > 0) {
      var st = scrollPos;
      if (st > lastScroll) {
        st = st - 1;
        $('header').removeClass('sticky-appear');
      } else {
        $('header').addClass('sticky-appear');
      }
      lastScroll = st;
      if (lastScroll <= headerHeight) {
        $('header').removeClass('sticky-appear');
      }
    }
    
    // Set full screen height & top space
    if (scrollPos <= 0) {
      setTimeout(function() {
        fullScreenHeight();
        setTopSpaceHeight();
      }, headerTransition); // Header transition effect time
    }
    
    lastScroll = scrollPos;
  }  
  
  
})(jQuery);