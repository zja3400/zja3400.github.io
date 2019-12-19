/* 슬라이드 네비영역 */

$(document).ready(function () {
    $('.slide .slider .item:not(:first)').hide();
    $('.slide_nav .slide_n li').click(function () {
        listclick = $(this).attr('data-new');
        $('.slide .slider li').hide();
        $('.list' + listclick).show();
    });
});

$(document).ready(function () {
    $('.slide_n li').click(function () {
        var index = $('.slide_n li').index(this)
        $('.slide_n li').removeClass('active')
        $(this).addClass('active')
        $('.slider li').removeClass('active')
        $('.slider li:nth-child(' + (index + 1) + ')').addClass('active')
    });
});