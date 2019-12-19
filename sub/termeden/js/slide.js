$(document).ready(function () {
    var num = 0;
    var total = 3; // 사진갯수 -1
    var clear;

    start();

    function start() {
        clear = setInterval(function () {

            if (num == total) {
                num = 0;

                $('.bg').removeClass('active')
                $('.bg:nth-child(' + (num + 1) + ')').addClass('active')
                /*              $('').removeClass('active')
                                $('('+(num+1)+')').addClass('active')*/


            } else {
                num++;

                $('.bg').removeClass('active')
                $('.bg:nth-child(' + (num + 1) + ')').addClass('active')
                /*              $('').removeClass('active')
                                $('('+(num+1)+')').addClass('active')*/
            }
        }, 4000);
    };
    $('.slide').hover(function () {
        clearInterval(clear);
    }, function () {
        start();
    });
});
