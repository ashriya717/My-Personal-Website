$(function () {
   
    $("#content1").on("hide.bs.collapse", function () {
       // $(this).menu-item-desc ("span").css("opacity", 1);
        $(".btn-portfolio1").html('<span class="glyphicon glyphicon-collapse-down"></span> Read More');
    });
    $("#content1").on("show.bs.collapse", function () {
        $(".btn-portfolio1").html('<span class="glyphicon glyphicon-collapse-up"></span> Read Less');
       
    });

    $("#content2").on("hide.bs.collapse", function () {
        $(".btn-portfolio2").html('<span class="glyphicon glyphicon-collapse-down"></span> Read More');
    });
    $("#content2").on("show.bs.collapse", function () {
        $(".btn-portfolio2").html('<span class="glyphicon glyphicon-collapse-up"></span> Read Less');
    });

    $("#content3").on("hide.bs.collapse", function () {
        $(".btn-portfolio3").html('<span class="glyphicon glyphicon-collapse-down"></span> Read More');
    });
    $("#content3").on("show.bs.collapse", function () {
        $(".btn-portfolio3").html('<span class="glyphicon glyphicon-collapse-up"></span> Read Less');
    });

    $(".hamburger-menu").on("click", function () {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });
    $(".nav-list").on("click", function () {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });
    AOS.init({
        easing: "ease",
        duration: 1000,
    });
});

$(window).on("scroll load", function () {
    //shrink to the navbar when scrolling down

    if ($(document).scrollTop() > 80) {
        $(".primary-nav").addClass("shrink");
    } else {
        $(".primary-nav").removeClass("shrink");
    }
});
