(function () {
  const $window = $(window);
  function hideNavbar() {
    $('.navbar').css({
      'margin-top': '-100px',
      opacity: '0',
    });
    $('.navbar-default').css({
      'background-color': 'rgba(59, 59, 59, 0)',
    });
  }
  function showNavbar() {
    $('.navbar').css({
      'margin-top': '0px',
      opacity: '1',
    });
    $('.navbar-default').css({
      'background-color': 'rgba(59, 59, 59, 0.7)',
      'border-color': '#444',
    });
    $('.navbar-brand img').css({
      height: '35px',
      'padding-top': '0px',
    });
    $('.navbar-nav > li > a').css({
      'padding-top': '15px',
    });
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
