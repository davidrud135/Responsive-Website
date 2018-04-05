/* eslint-disable func-names */
$(document).ready(() => {
  $('.navbar-nav li a').click(function () {
    $('.navbar-nav li a').parent().removeClass('active');
    $(this).parent().addClass('active');
  });

  $(window).scroll(() => {
    $('section').each(function () {
      const currSectionId = $(this).attr('id');
      const currSectionHeight = $(this).outerHeight();
      const currSectionPosition = $(this).offset().top - 70;

      if (
        $(window).scrollTop() > currSectionPosition
        && $(window).scrollTop() < currSectionPosition + currSectionHeight
      ) {
        $(`.navbar-nav li a[href="#${currSectionId}"]`).parent()
          .addClass('active');
      } else {
        $(`.navbar-nav li a[href="#${currSectionId}"]`).parent()
          .removeClass('active');
      }
    });
  });
});
