(function () {
  const $window = $(window);
  const $navbar = $('.navbar');

  function hideNavbar() {
    $navbar.removeClass('show');
    $navbar.addClass('hide');
  }
  function showNavbar() {
    $navbar.removeClass('hide');
    $navbar.addClass('show');
  }

  $(document).ready(() => {
    $window.scroll(() => {
      if ($window.scrollTop() < 80)
        hideNavbar();
      else
        showNavbar();
    });
  });
}(jQuery));
