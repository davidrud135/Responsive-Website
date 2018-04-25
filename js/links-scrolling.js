(function () {
  const $navbarLinks = $('nav li a');
  function scrollToNeededSection() {
    let targetSection = $(this.hash);
    $('html, body').animate({
      scrollTop: targetSection.offset().top
    }, 1000);
  }
  $navbarLinks.click(scrollToNeededSection);
}(jQuery));
