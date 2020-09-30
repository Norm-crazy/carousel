$(document).ready(function(){
	// Cycles the carousel to a particular frame
    $(".slide-one").click(function(){
    	$("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
    	$("#myCarousel").carousel(1);
    });
});
