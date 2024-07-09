$(function () {
    var head = $('.tabhead li');
    var body = $('.content div');
    head.click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        var index = $(this).index();
        body.eq(index).show().siblings().hide();
    });

});