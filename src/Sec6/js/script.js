$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1
})

new WOW().init();

var owl = $('.owl-carousel');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
})