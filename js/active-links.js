(function () {
  const $navbarLinksSelector = $('.navbar-nav li a');
  const $window = $(window);

  function onLinkClick() {
    const $this = $(this);
    $navbarLinksSelector.parent().removeClass('active');
    $this.parent().addClass('active');
  };

  function highlightCurrLink() {
    const $this = $(this);
    const $currSectionId = $this.attr('id');
    const $currSectionHeight = $this.outerHeight();
    const $currSectionPositionTop = $this.offset().top - 70;
    const $currSectionLinkSelector =
      $(`.navbar-nav li a[href="#${$currSectionId}"]`);
    if (
      $window.scrollTop() > $currSectionPositionTop &&
      $window.scrollTop() < $currSectionPositionTop + $currSectionHeight
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
