$(document).ready(function () {
    $(".testimonial_slide").owlCarousel({
        items: 1,
        navText: ["<i class='fas fa-long-arrow-alt-left prev_arrow'></i>", "<i class='fas fa-long-arrow-alt-right next_arrow'></i>"],
        nav: true,
        loop: true,
        smartSpeed: 700,
    });
    $(".venobox").venobox({
        framewidth: "70%",
        titleattr: "data-title",
        titleBackground: "#ffffff",
        titleColor: "#ab6db0",
        titlePosition: "top",
        share: ["facebook", "linkedin", "pinterest", "twitter"],
        spinner: "cube-grid",
        spinColor: "#ab6db0",
    });
});
