$(document).ready(function () {
    var interval = 3000;

    function startCarousel() {
        var $currentImg = $('.down > div.current');

        if ($currentImg.is(':last-child')) {
            $('.down > div:first-child').trigger('click');
        } else {
            $currentImg.next().trigger('click');
        }
    }

    var carouselTimer = setInterval(startCarousel, interval);

    $('.down > div').hover(
        function () {
            clearInterval(carouselTimer);
        },
        function () {
            carouselTimer = setInterval(startCarousel, interval);
        }
    );

    $('.down > div').click(function () {
        var $clickedImg = $(this).find('img');
        var imgSrc = $clickedImg.attr('src');
        $('.on img').attr('src', imgSrc);
        $('.down > div').removeClass('current');
        $(this).addClass('current');

        if (imgSrc === '../107第二次考核作业/images/img1.jpg') {
            $('.on .p1').show();
            $('.on .p2, .on .p3, .on .p4').hide();
        } else if (imgSrc === '../107第二次考核作业/images/img2.jpg') {
            $('.on .p2').show();
            $('.on .p1, .on .p3, .on .p4').hide();
        } else if (imgSrc === '../107第二次考核作业/images/img3.jpg') {
            $('.on .p3').show();
            $('.on .p1, .on .p2, .on .p4').hide();
        } else if (imgSrc === '../107第二次考核作业/images/img4.jpg') {
            $('.on .p4').show();
            $('.on .p1, .on .p2, .on .p3').hide();
        }
    });

    $('.down-1').trigger('click');
});
