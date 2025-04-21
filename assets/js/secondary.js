document.body.classList.add('left-modern-menu', 'custom-cursor');



	/* ------------------------------------------------------------------------
	 * window on load
	 * ------------------------------------------------------------------------ */
	$(window).on('load', function () {

		/* ------------------------------------------------------------------------
		 * loader
		 * ------------------------------------------------------------------------ */
var _lorder = $('.template-loader');

if (_lorder.length > 0) {
  setTimeout(function() {
    _lorder.fadeOut(100);
  }, 3000); // 3000ms = 3s delay
}
});

