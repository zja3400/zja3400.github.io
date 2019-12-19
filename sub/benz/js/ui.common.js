/* 마우스 반응 */

(function($){
	$.fn.extend({
		customStyle : function(options) {
			//if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
				return this.each(function() {
					var currentSelected = $(this).find(':selected');
					$(this).after('<span class="select-style"><span class="select-style-inner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
					var selectBoxSpan = $(this).next();
					var selectBoxWidth = parseInt($(this).width());   
					var selectBoxSpanInner = selectBoxSpan.find(':first-child');
					selectBoxSpan.css({display:'inline-block'});
					selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
					var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
					$(this).height(selectBoxHeight).change(function(){
						selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
					});
				});
			//}
		}
	});
});

$(function(){
	// selectbox styling
	//	$('select').not('.except').customStyle();
	// mainpage over animation
	overAnimate();
	// images loading error
	$('img').each(function(){
		$(this).error(function(){
			$(this).attr('src','https://img.woowahan.com/www/common/bg-noimg.png').addClass('noimg');
		})
		.each(function(){
  		$(this).attr('src',$(this).attr('src'));
		});
	});
});



// mainpage over animation
var posX, posY;
function getDirection(ev,obj,state) {
var	w = $(obj)[0].offsetWidth,
		h = $(obj)[0].offsetHeight,
		x = (ev.pageX - $(obj).offset().left - (w / 2) * (w > h ? (h / w) : 1)),
		y = (ev.pageY - $(obj).offset().top - (h / 2) * (h > w ? (w / h) : 1)),
		d = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 22.5 ) + 15 )  % 16;
		
		switch(d) {
			case 1 :
				posX = -w;
				posY = -h;
				break;
			case 2 :
				posX = -(w/2);
				posY = -h;
				break;
			case 3 :
				posX = 0;
				posY = -h;
				break;
			case 4 :
				posX = w/2;
				posY = -h;
				break;
			case 5 :
				posX = w;
				posY = -h;
				break;
			case 6 :
				posX = w;
				posY = -(h/2);
				break;
			case 7 :
				posX = w;
				posY = 0;
				break;
			case 8 :
				posX = w;
				posY = h/2;
				break;
			case 9 :
				posX = w;
				posY = h;
				break;
			case 10 :
				posX = w/2;
				posY = h;
				break;
			case 11 :
				posX = 0;
				posY = h;
				break;
			case 12 :
				posX = -(w/2);
				posY = h;
				break;
			case 13 :
				posX = -w;
				posY = h;
				break;
			case 14 :
				posX = -w;
				posY = h/2;
				break;
			case 15 :
				posX = -w;
				posY = 0;
				break;
			default :
				posX = -w;
				posY = -(h/2);
				break ;
		}
};

function overAnimate() {
	$('.boxm')
	.mouseenter(function(ev){
		getDirection(ev,$(this),'in');
		$(this).find('.cover').css('background-position',''+posX+'px '+posY+'px').stop().animate({
			backgroundPositionX:"0",
			backgroundPositionY:"0"
		}, {duration:300})
	})
	.mouseleave(function(ev){
		getDirection(ev,$(this),'out');
		$(this).find('.cover').stop().animate({
			backgroundPositionX:posX,
			backgroundPositionY:posY
		}, {duration:300})
	});
}


