$(function () {
    var $slides = $('.slide img');
    var $dots = $('.dots div');

    $dots.click(function () {
        var index = $(this).index();
        $slides.removeClass('active');
        $slides.eq(index).addClass('active');
        $dots.removeClass('active');
        $(this).addClass('active');
    });

    var index = 0;
    var time = setInterval(function () {
        $slides.removeClass('active');
        $slides.eq(index).addClass('active');
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
        index = (index + 1) % $slides.length;
    }, 3000);

    $('.next').click(function () {
        index = (index + 1) % $slides.length;
        $slides.removeClass('active');
        $slides.eq(index).addClass('active');
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
    });

    $('.prev').click(function () {
        index = (index - 1 + $slides.length) % $slides.length;
        $slides.removeClass('active');
        $slides.eq(index).addClass('active');
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
    });

    $('.slide').mouseenter(function () {
        clearInterval(time);
    });

    $('.slide').mouseleave(function () {
        time = setInterval(function () {
            $slides.removeClass('active');
            $slides.eq(index).addClass('active');
            $dots.removeClass('active');
            $dots.eq(index).addClass('active');
            index = (index + 1) % $slides.length;
        }, 3000);
    });
});

