$(document).ready(function() {

  //career-tab
  (function() {
    $('.career__block').on('click', function(e) {
      e.preventDefault();

      var
        $this = $(this),
        item = $this.closest('.career__item'),
        ndx = item.index();

      item.addClass('career__block-active')
      .siblings()
      .removeClass('career__block-active');;

      if(ndx == 0) {

        $('.career__pic-img').fadeOut(500, function () {
          $(this).attr('src', 'img/content/career-pic_work.jpg');
          $(this).fadeIn(500);
        });
      } else if(ndx == 1) {
        $('.career__pic-img').fadeOut(500, function () {
          $(this).attr('src', 'img/content/career-pic_cetera.png');
          $(this).fadeIn(500);
        });
      } else if(ndx == 2){
        $('.career__pic-img').fadeOut(500, function () {
          $(this).attr('src', 'img/content/career-pic_sstu.jpg');
          $(this).fadeIn(500);
        });
      }

    });

  }());

  //contacts
  (function() {
    $('.contacts').on('click', function() {
      var
        $this = $(this),
        $contacts__link = $('.contacts__link'),
        $contacts__icon = $('.contacts__icon'),
        $class_has = $contacts__link.hasClass('contacts__link-active');


        if($class_has) {

          $contacts__link.removeClass('contacts__link-active');
          $contacts__icon.removeClass('contacts__icon-active');
          $('.contacts__dropdown').fadeOut();
          } else {

          $('.contacts__dropdown').fadeIn();
          $contacts__link.addClass('contacts__link-active');
          $contacts__icon.addClass('contacts__icon-active');

        }
    });
  }());

});
