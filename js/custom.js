$(document).ready(function (){
    // $(".testimonial_slide").slick({
    //     autoplay: true,
    //     prevArrow: "<i class='fas fa-long-arrow-alt-left me-4 prev_arrow'></i>",
    //     nextArrow: "<i class='fas fa-long-arrow-alt-right next_arrow'></i>",
    // });
    $(".testimonial_slide").owlCarousel({
        items: 1,
        navText: ["<i class='fas fa-long-arrow-alt-left prev_arrow'></i>","<i class='fas fa-long-arrow-alt-right next_arrow'></i>"],
        nav: true,
        loop: true,
        smartSpeed: 700,
        
    });
});













