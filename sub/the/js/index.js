$(document).ready(function () {
    $('a.main_btn1').click(function () {
        $('div.bottomNav').toggleClass("bottom");
    });
});

$(document).ready(function () {
    $("#wrap").fullpage({
        loopHorizontal: false,
        menu: '#menu',
        continuousVertical: true,
        anchors: ['HOME', 'PROMARKETER', 'MARKETING', 'PROFESSIONAL', 'CONSULTING', 'US'],
		onLeave: function(index, direction){
			if(index === 2){
				$('div.bottomNav').animate({
					left: '-1200px'
				}, 1500, 'easeOutExpo');
			}
			if(index == '#MARKETING'){
				$('div.bottomNav').animate({
					left: '-1200px'
				}, 1500, 'easeOutExpo');
			}
			if(index == '#PROFESSIONAL'){
				$('div.bottomNav').animate({
					left: '-1200px'
				}, 1500, 'easeOutExpo');
			}
		}
    });
});




function selectCheckBox1() {
    if (ufrm1.name.value == "") {
        alert("이름을 입력해주세요.");
        ufrm1.name.focus();
        return;
    }
    if (ufrm1.age.value == "") {
        alert("회사를 입력해주세요.");
        ufrm1.tel1.focus();
        return;
    }
    if (ufrm1.tel1.value == "") {
        alert("연락처를 입력해주세요.");
        ufrm1.tel1.focus();
        return;
    }
    if (ufrm1.tel2.value == "") {
        alert("연락처를 입력해주세요.");
        ufrm1.tel2.focus();
        return;
    }
    if (ufrm1.tel3.value == "") {
        alert("연락처를 입력해주세요.");
        ufrm1.tel3.focus();
        return;
    }
    alert("신청 완료되었습니다.\n감사합니다.");
    ufrm1.submit();
    return false;
};

$(window).on('load', function () {
    window.location.hash = '#HOME';
});
