(function () {
  function scroll(event) {
    if (
      window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      window.location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top,
        }, 1000, () => {
          const $target = $(target);
          $target.focus();
          if ($target.is(':focus')) {
            return false;
          }
          $target.attr('tabindex', '-1');
          $target.focus();
          return 0;
        });
      }
    }
  }

  $(document).ready(() => {
    const $allLinksSelector = $('a[href*="#"]');
    $allLinksSelector.click(scroll);
  });
}(jQuery));
