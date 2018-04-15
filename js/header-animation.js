/* eslint-disable func-names */
(function () {
  $(document).ready(() => {
    setInterval(() => {
      const $windowHeight = $(window).height();
      const $containerHeight = $('.header .container:last').height();
      const paddingTop = $windowHeight - $containerHeight;
      $('.header .container:last').css({
        'padding-top': `${Math.round(paddingTop / 2)}px`,
        'padding-bottom': `${Math.round(paddingTop / 2)}px`,
      });
    }, 10);
  });
}(jQuery));
