(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Footer water sheen
    $('.footer').each(function () {
        var $footer = $(this);

        if (!$footer.find('.footer-wave-sheen').length) {
            $footer.prepend('<span class="footer-wave-sheen" aria-hidden="true"></span>');
        }
    });

    // Whole-page click drop effect
    var $dropLayer = $('<div class="page-drop-layer" aria-hidden="true"></div>');
    $('body').append($dropLayer);

    $(document).on('click', function (event) {
        var $drop = $('<span class="page-drop" aria-hidden="true"></span>');

        $drop.css({
            left: event.clientX,
            top: event.clientY
        });

        $dropLayer.append($drop);

        window.setTimeout(function () {
            $drop.remove();
        }, 1350);
    });

})(jQuery);

