$(function () {
    var nav1 = $('#nav1');
    var nav2 = $('#nav2');
    var nav3 = $('#nav3');
    var nav4 = $('#nav4');
    var nav5 = $('#nav5');

    var box1 = $('#box-1');
    var box2 = $('#box-2');
    var box3 = $('#box-3');
    var box4 = $('#box-4');
    var box5 = $('#box-5');

    nav1.hover(function () {
        box1.slideToggle();
    });
    nav2.hover(function () {
        box2.slideToggle();
    });
    nav3.hover(function () {
        box3.slideToggle();
    });
    nav4.hover(function () {
        box4.slideToggle();
    });
    nav5.hover(function () {
        box5.slideToggle();
    });
});