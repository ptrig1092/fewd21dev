$( document ).ready(function() {
    $(".readMore").click(function() {
    	event.preventDefault();
    	$("#expandText").slideDown();
    	$(".readMore").hide();
    	$(".readLess").show();
    });
    $(".readLess").click(function(){
    	event.preventDefault();
    	$("#expandText").slideUp();
    	$(".readMore").show();
    	$(".readLess").hide();
    });
    $(".asideLink").click(function(){
    	event.preventDefault();
    	$("#expandAsideText").slideDown(); 
    	$(".asideLink").hide();
    }); 
});