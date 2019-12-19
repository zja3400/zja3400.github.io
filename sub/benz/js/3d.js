// JavaScript Document
$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
}); // 여기까지슬라이드

$(function(){
$('.attrSub  a').click(function(){
	var attrNew = $(this).find('>img').attr('data-new');
	$('section .image > img').removeClass('on');
	$('section .image img#list' + attrNew).addClass('on');
})// 클릭반응
		
$('.navi li').on('click',function(e){
	e.preventDefault(); // 에이태그에 샵논을 굳이쓰지않아도, 리셋이되지않는다.
	var i=$(this).index()+1;
	$('.navi li a').removeClass('on');
	$(this).children('a').addClass('on');	
	$('.navi li').removeClass('on');
	$(this).addClass('on');	
	$('#wrap_3d').removeClass();
	$('#wrap_3d').addClass('face'+i);
});// 3d모션은 여기까지

$(window).scroll(function(){
	var winST = $(window).scrollTop();
	var artT =$('article').offset().top;
	if(winST>2000){
		$('article .article_p3').addClass('on')
	}else{
		$('article .article_p3').removeClass('on')
		}
	if(winST>2300){
		$('article .article_p').addClass('on')
	}else{
		$('article .article_p').removeClass('on')
		}
	if(winST>2600){
		$('article .article_p2').addClass('on')
	}else{
		$('article .article_p2').removeClass('on')
		}		
});// 텍스트 들어오는건 여기까지

// 비디오시작
function trackLocation(e) {
  var rect = videoContainer.getBoundingClientRect(),
      position = ((e.pageX - rect.left) / videoContainer.offsetWidth)*100;
  if (position <= 100) { 
    videoClipper.style.width = position+"%";
    clippedVideo.style.width = ((100/position)*100)+"%";
    clippedVideo.style.zIndex = 3;
	}
}

var videoContainer = document.getElementById("video-compare-container"),
videoClipper = document.getElementById("video-clipper"),
clippedVideo = videoClipper.getElementsByTagName("video")[0];
videoContainer.addEventListener( "mousemove", trackLocation, false); 
videoContainer.addEventListener("touchstart",trackLocation,false);
videoContainer.addEventListener("touchmove",trackLocation,false);

// 비디오끝
    
$(window).on('scroll load' ,function(){
	$('section, article, aside, div.aa').each(function(){
		var bOject=$(this).offset().top+$(this).outerHeight()/7;
		var bWindow=$(window).scrollTop()+$(window).height();
		if(bOject<bWindow){
			$(this).css({'opacity':'1','transform':'translateY('+0+'em)'})
			}else{
			$(this).css({'opacity':'0','transform':'translateY('+7+'em)'})
			}
	});
}); // 윈도우오파시티 반응


$(document).ready(function(){
		$('div#top').fadeOut();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('div#top').fadeIn();
		} else {
			$('div#top').fadeOut();
		}
	});
	$('div#top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
	});
	
});// 우측탑픽시

$(document).ready(function(e) {
    $("#popup").click(function(){
		$(this).slideUp();
		});
});

});



