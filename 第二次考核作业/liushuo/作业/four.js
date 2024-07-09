$(function () {
    var oul = $('.sco ul');
    var outHtml = oul.html();
    oul.html(outHtml + outHtml)
    setInterval(function () {

        if (oul.css('left') == '-1180px') {
            oul.css('left', '20px')
        }
        oul.css('left', '+=-200px');

    }, 5000)
    var le = $('.but-l');
    var ri = $('.but-r');
    le.click(function () {
        if (oul.css('left') == '-1180px') {
            oul.css('left', '20px')
        }
        oul.css('left', '+=-200px');
    })
    ri.click(function () {
        if (oul.css('left') == '-1180px') {
            oul.css('left', '20px')
        }
        oul.css('left', '+=-200px');
    })

})