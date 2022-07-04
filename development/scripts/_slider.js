(function($) {

    $('.slider__widget').on('change', function (){
        $(this).parents('.slider').find('.slider__output').text( $(this).val() )
    });

})(jQuery);
