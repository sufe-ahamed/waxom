$(function(){
    // banner slider start
    
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
     });
    // banner slider end

    // service slider start
    $('.service_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
     });
     // service slider end

    //  veno box video start
     new VenoBox({
        selector: '.venubox',
    });
  //  veno box video end

    //  counter up start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //  counter up end

    // blog slider start
    $('.blog_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
     });
    // blog slider end
});