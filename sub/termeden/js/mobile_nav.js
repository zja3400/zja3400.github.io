$(document).ready(function(){
   $("div.mobile-n-m").slideUp(0);
    $(".mobile-n").click(function(){
       $("div.mobile-n-m").slideDown(1000);
    });
    $("div.mobile-n-m ul li:nth-child(1) a").click(function(){
        $("div.mobile-n-m").slideUp(1000);
    });
});