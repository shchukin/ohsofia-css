(function($) {

    $('.listing__item').on('click', function () {
        $('.listing').addClass('listing--expanded');
        $(this).addClass('listing__item--current');
        $('.listing__item--current').addClass('full-card--open');
        $('.listing__item:not(.listing__item--current)').fadeOut();
        $('.deck__question').slideUp(600);
        $("html, body").animate({scrollTop: 0}, "slow");
    });

})(jQuery);
