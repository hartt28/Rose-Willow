$(document).ready(function(){
    $(".carousel").slick({

      // normal options...
      infinite: false,
    
      // the magic
      responsive: [{
    
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
    
        }, {
    
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: true
          }
    
        }, {
    
          breakpoint: 300,
          settings: "unslick" // destroys slick
    
        }]
    });
    console.log(12345);
    $('.slider_wrap').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      });
})