(function () {
  const $navbarLinksSelector = $('.navbar-nav li a'),
    $window = $(window);

  function onLinkClick() {
    const $this = $(this);
    $navbarLinksSelector.parent().removeClass('active');
    $this.parent().addClass('active');
  };

  function highlightCurrLink() {
    const $this = $(this),
      $currSectionId = $this.attr('id'),
      $currSectionHeight = $this.outerHeight(),
      $currSectionPositionTop = $this.offset().top - 70,
      $currSectionLinkSelector =
        $(`.navbar-nav li a[href="#${$currSectionId}"]`);

    if(
      $window.scrollTop() > $currSectionPositionTop
      && $window.scrollTop() < $currSectionPositionTop + $currSectionHeight
    ) {
      $currSectionLinkSelector.parent().addClass('active');
    } else {
      $currSectionLinkSelector.parent().removeClass('active');
    }
  };

  $(document).ready(() => {
    $navbarLinksSelector.on('click', onLinkClick);
    $window.on('scroll', () => {
      $('section').each(highlightCurrLink);
    });
  });
}(jQuery));
