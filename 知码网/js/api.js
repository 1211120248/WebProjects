$(function(){
   //默认显示
   var defaultItem =  $("div#help-right .active");
   defaultItem.css("display","block");

   $("#help-left a").on("click",function(){
       var itemid = $(this).data("itemid");

       var defaultItem = $("div#help-right .active");
       defaultItem.removeClass("active");
       defaultItem.css("display","none");

       $("#" + itemid).addClass("active").css("display","block");
   });
});