$(function () {
    var $enlarge = $('.enlarge');
    var $closeBtn = $('.close-btn');
    var $overlay = $('.overlay');

    $('.five img').click(function (event) {
        event.stopPropagation();
        var $clickedImg = $(this);
        $enlarge.html('').append($clickedImg.clone());
        $enlarge.addClass('show');
        $closeBtn.show();
        $overlay.show();
    });

    $closeBtn.click(function () {
        $enlarge.removeClass('show');
        $(this).hide();
        $overlay.hide();
    });

    $(document).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest('.enlarge').length && !$target.closest('.five img').length) {
            $enlarge.removeClass('show');
            $closeBtn.hide();
            $overlay.hide();
        }
    });
});
