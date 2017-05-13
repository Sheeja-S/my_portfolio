$(document).ready(function() {

  $(".clickable").click(function() {
    $("#resume-showing").toggle();
    $("#resume-hidden").toggle();
  });


$('.portfolioImage').hover(
    function(){
         $(this).find(".image_frame").addClass("lowerOpacity");
}, function(){
     $(this).find(".image_frame").removeClass("lowerOpacity");
});
});
