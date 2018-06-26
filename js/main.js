$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
      $('#up_btn').fadeIn();
    } else {
    $('#up_btn').fadeOut();
    }
  });

  $("#up_btn").on('click', function(){
    $('body,html').animate({scrollTop:0},800);
  })
});

/*Slider---------------------------------------*/
$(document).ready(function() {
  $('.slide_main').bxSlider({
    useCSS: false,
    
    auto: true
  });

  //Извращение с hoverom в слайдере главной
  $('.slide_main_wrap').hover(
    function(){
      $('#bg_slider').css('background-position', 'bottom center');
  }, function(){
      $('#bg_slider').css('background-position', '');
  });

  //inside slider
  $('.slider_image').bxSlider({
    useCSS: false,
    controls: false,
    pagerCustom: '#slide01_pager'
  });

  $('.slider_image_thumb').bxSlider({
    useCSS: false,
    controls: true,
    pager: false,
    minSlides: 6,
    maxSlides: 6,
    moveSlides: 1,
    slideWidth: 80,
    hideControlOnEnd: false,
    infiniteLoop: false,
    slideMargin: 10
  });
  
});

//___________Fancybox_____________________________

$(document).ready(function() {
  $(".fancy_video").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });
});

//catalog menu



$(document).ready(function() {
  $('.ico_sub').on('click', function(){
    if(! $(this).parents('li').hasClass('opened'))
    {
      $(this).parents('.product_menu_wrap').children('li').each(function(){
        $(this).removeClass('opened').find('ul').slideUp();
      });
    }
    $(this).parents('li').toggleClass('opened').find('ul').slideToggle(500);
  })
});

/*Сворачивание блока_______________*/
$(document).ready(function() {
    var folding_link = $('.fold_header');
    folding_link.on('click', function(event) {
      $(this).toggleClass('js-fold');
      event.preventDefault();
      var foldContent = $(this).next('.fold_content');

      if (foldContent.is(":hidden")) {
        $(this).removeClass('minimized');
        foldContent.slideDown(800);
      } else {
        $(this).addClass('minimized');
        foldContent.slideUp(500);
      }
    })
});


jQuery(document).ready(function($) {
  $('.call_form').fancybox({
    padding: 0,
    
    helpers: { 
           title: null
       }
    });

  $('#form_contact').submit(function(){
    $.fancybox.open([$('#form_modal_info')], {
        padding: 0,
      })
  });

  $('.close_modal').on('click', function(){
    $.fancybox.close();
  })

});


$(document).ready(function() {
  $('select').styler();
});