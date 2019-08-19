$(function() {  
    $(window).resize(function(){
        if ($(window).width() <= 768){	
            $(".data-selection .card-box").addClass("hidden");
            $(".contact-section").removeClass("hidden");            
        } else {
            $(".data-selection .card-box").removeClass("hidden");
            $(".contact-section").addClass("hidden");               
        }
    });
});