$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() < 80) {
      $('.navbar').css({
        'margin-top': '-100px',
        opacity: '0',
      });
      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)',
      });
    } else {
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
  });
});

$(document).ready(() => {
  $('.nav-item').click(() => {
  });
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function scroll(event) {
    // On-page links
      if (
        window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      &&
      window.location.hostname === this.hostname
      ) {
      // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top,
          }, 1000, () => {
          // Callback after animation
          // Must change focus!
            const $target = $(target);
            $target.focus();
            if ($target.is(':focus')) { // Checking if the target was focused
              return false;
            }
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            return 0;
          });
        }
      }
    });
});

$(document).ready(() => {
  $('.navbar-nav li a').click(() => {
    $('.navbar-nav li a').parent().removeClass('active');
    $('.navbar-nav li a:focus').parent().addClass('active');
  });
});
