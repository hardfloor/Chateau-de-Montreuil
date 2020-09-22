$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar").css('background-color', 'rgba(255, 255, 255, 1)');
                $(".navbar").css('transition', 'all .8s ease');
            } else {
                $('.navbar').css('background-color', 'rgba(250, 250, 250, 0.5)');
                $(".navbar").css('transition', 'all .3s ease');
            }
        });
    }
});