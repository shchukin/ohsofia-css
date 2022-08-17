(function($) {

    $('.listing__flip-handler').on('click', function () {
        $('.listing__item--current').addClass('full-card--open');
    });

    $('.listing__item').on('click', function () {
        $('.listing').addClass('listing--expanded');
        $('.listing__item--current').removeClass('listing__item--current');
        $(this).addClass('listing__item--current');
    });

})(jQuery);
