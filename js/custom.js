$('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    // navs:true, 
    // prevArrow: '<button class="navs next"><i class="bi bi-arrow-left"></i></button>',
    // nextArrow: '<button class="navs previous"><i class="bi bi-arrow-right"></i></button>',

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});