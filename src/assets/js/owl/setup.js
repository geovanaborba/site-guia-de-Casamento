var owl = $('.owl-carousel');

owl.owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 500,
    fluidSpeed: 1000,
    slideTransition: 'ease-in',
    startPosition: 2,
    slideBy: 1,
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        360:{
            items:2
        },
        700:{
            items:3
        }
    }
});


    $("#btn-anterior").on('click', function(){
        owl.trigger('prev.owl.carousel');
    });

    $("#btn-proximo").on('click', function(){
        owl.trigger('next.owl.carousel');
    });
