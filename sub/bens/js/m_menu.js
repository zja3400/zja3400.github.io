/* 모바일 햄버거 메뉴클릭 */

$(document).ready(function () {
    $('.m_menu_cover').fadeOut(0);
    $('nav .m_menu .bugger').click(function () {
        $('.m_menu_cover').fadeIn(1000);
    });
    $('.m_menu_cover .bugger').click(function () {
        $('.m_menu_cover').fadeOut(1000);
    });
});