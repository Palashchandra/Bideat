(function ($) {
    "use strict";

    //sticky menu
    // $(window).on('scroll', function () {
    //     var window_top = $(window).scrollTop() + 0;
    //     if (window_top > 0) {
    //         $('.cre_header_part').addClass('menu_fixed animated slideInDown');
    //     } else {
    //         $('.cre_header_part').removeClass('menu_fixed animated slideInDown');
    //     }
    // });

    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();

    //video popup
    var video_popup = $('.video_popup');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    $(".swiper-container").each(function () {
        var swiperJs = $(this),
        perpage = ($(this).attr("id"), $(this).data("perpage") || 1),
        loop = $(this).data("loop"),
        speed = $(this).data("speed") || 1000,
        space = $(this).data("space") || 0,
        effect = $(this).data("effect"),
        center = $(this).data("center"),
            pl = $(this).data("autoplay"),
            nex = $(this).data("next"),
            pre = $(this).data("prev"),
            pag = $(this).data("pagination"),
            mous = $(this).data("mousewheel"),
            pagtype = $(this).data("paginationtype"),
            direction = $(this).data("direction") || "horizontal",
            cfr = $(this).data("rotate"),
            cfs = $(this).data("stretch"),
            cfd = $(this).data("depth"),
            lops = $(this).data("loopslides"),
            scol = $(this).data("slidescolumn"),
            breakpoints = $(this).data("breakpoints");
        new Swiper(swiperJs, {
            slidesPerView: perpage,
            direction: direction,
            spaceBetween: space,
            loop: loop,
            speed: speed,
            effect: effect,
            breakpoints: breakpoints,
            centeredSlides: center,
            mousewheel: mous,
            slidesPerColumn: scol,
            slideToClickedSlide: true,
            loopedSlides: lops,
            autoplay: pl,
            coverflowEffect: {
                rotate: cfr,
                stretch: cfs,
                depth: cfd,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: pag,
                type: pagtype,
                clickable: !0
            },
            navigation: {
                nextEl: nex,
                prevEl: pre
            }
        })
    })

    //maasonry js
    $(".cre_addons_grid_wrapper").each(function () {
        var cre_addons_grid_wrapper = $('.cre_addons_grid_wrapper');
        if (cre_addons_grid_wrapper.length) {
            $(this).cre_dlAddonsGridLayout();
        }
    });

    //count up
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }

    //top scroll
    var cre_top_scroll = $('.cre_top_scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            cre_top_scroll.addClass('show');
        } else {
            cre_top_scroll.removeClass('show');
        }
    });
    cre_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //niceselect select jquery
    var niceSelect = $('.niceSelect');
    if (niceSelect.length > 0) {
        niceSelect.niceSelect();
    }

    //datepicker jquery
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap5'
    });

}(jQuery));