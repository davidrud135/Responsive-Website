(function () {
  const $window = $(window);
  const $navbar = $('.navbar-default');

  $(document).ready(() => {
    $window.scroll(() => {
      if ($window.scrollTop() < 80)
        hideNavbar();
      else
        showNavbar();
    });
  });
  function hideNavbar() {
    $navbar.removeClass('show-navbar-div');
    $navbar.addClass('hide-navbar-div');
  }
  function showNavbar() {
    $navbar.removeClass('hide-navbar-div');
    $navbar.addClass('show-navbar-div');
  }
}(jQuery));
