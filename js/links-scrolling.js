(function () {
  const $navbarLinks = $('nav li a');
  $navbarLinks.click(scrollToNeededSection);
  function scrollToNeededSection() {
    let targetSection = $(this.hash);
    $('html, body').animate({
      scrollTop: targetSection.offset().top
    }, 1000);
  }
}(jQuery));
