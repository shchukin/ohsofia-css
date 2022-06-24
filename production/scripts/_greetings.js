(function($) {

    $('.greetings__dot').on('click', function () {
        if( ! $(this).hasClass('greetings__dot--current') ) {
            let index = $(this).index();
            $('.greetings__slide--current').removeClass('greetings__slide--current');
            $('.greetings__dot--current').removeClass('greetings__dot--current');
            $('.greetings__slide:eq(' + index + ')').addClass('greetings__slide--current');
            $(this).addClass('greetings__dot--current');
        }
    });

})(jQuery);
