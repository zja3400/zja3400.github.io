$(document).ready(function(){
   $("header nav .m-nav .m-nav-i .m-nav-i-ul li .m-nav-i-ul-s").slideUp(0);
        $("header nav .m-nav .m-nav-i .m-nav-i-ul li").mouseenter(function(){
           $(".m-nav-i-ul-s").stop().slideDown();
        });
        $("header nav .m-nav .m-nav-i .m-nav-i-ul li").mouseleave(function(){
           $(".m-nav-i-ul-s").stop().slideUp();
        });
});