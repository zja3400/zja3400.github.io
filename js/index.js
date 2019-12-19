function insertFormMove() {
    var offset = $(".about").offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 700);
};

function insertFormMove2() {
    var offset = $(".pf").offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 700);
};

function insertFormMove3() {
    var offset = $(".contact").offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 700);
};
/*메뉴 클릭반응*/

$(window).load(function () {
    $("#intro").fadeOut(5000);
});
/*인트로 반응*/

$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    $(".header").css("transform", 'translate(0px,+' + scroll / 20 + '%)');
});
/*페럴렉스 스크롤 반응 header 부분영역*/

$(document).on('scroll', function () {
    var sectionTag = $('.header');
    var sectionTag = sectionTag.offset().top;
    var scrollTop = $(document).scrollTop();
    if (scrollTop > sectionTag) {
        //만약에 header에 fixed 클래스가 없을경우 if문 실행.
        //클래스가 있는데도 실행이 되면 계속 헤더가 사라지고 페이딩이 되어버리기 때문에 불편합니다
        if (!$('header nav').hasClass('fixed')) {
            $('header nav').hide().fadeIn(200, function () {
                $(this).addClass('fixed');
            });
        }
    } else {
        //반면에 이건 header가 fixed 클래스를 가지고 있을때에만 실행
        //fixed값이 없는데도 실행이 된다면 스크롤바가 윗부분에 있을때 계속 페이드아웃이 됩니다
        if ($('header nav').hasClass('fixed')) {
            $('header nav').fadeOut(200, function () {
                $('header nav').removeClass('fixed');
            });
            //ES6의 promise 함수를 이용합니다.promise란 이 코드는 저 위의 코드의 실행이 끝났을때 실행이 되게 하는 것입니다. 
            $('header nav').promise().done(function () {
                $(this).fadeIn();
            });
        }
    }
});
/*window scroll nav fixed 부분영역*/