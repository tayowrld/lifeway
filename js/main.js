$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            // можно добавить другие breakpoint'ы для разных размеров экранов
        ]
    });

    $('.reviews').on('mousemove', function(e) {
        var width = $(this).width();
        var height = $(this).height();
        var x = e.pageX - $(this).offset().left - width / 2;
        var y = e.pageY - $(this).offset().top - height / 2;
        var rotateY = 20 * (x / width);
        var rotateX = -20 * (y / height);

        $('.slide').css('transform', 'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)');
    });
});