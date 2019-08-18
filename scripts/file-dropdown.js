$(function() {
    let r_clicks = 0;
    let p_clicks = 0;
    let g_clicks = 0;
    
    $("#resumes").click(function() {
        event.preventDefault();
        $("#resumes #folder-title").css("color", "#181818");      
        $(".resume-file").removeClass("hidden"); 
        if(r_clicks > 0){
            $("#resumes #folder-title").css("color", "");  
            $("#resumes #folder-title").css("color", "#fff");  
            $(".resume-file").addClass("hidden");
            r_clicks = 0;
        } else {
            r_clicks++;
        }
    });

    $("#projects").click(function() {
        event.preventDefault();
        $("#projects #folder-title").css("color", "#181818");  
        if(p_clicks > 0){
            $("#projects #folder-title").css("color", "");  
            $("#projects #folder-title").css("color", "#fff");  
            $(".project-file").addClass("hidden");
            p_clicks = 0;
        } else {
            p_clicks++;
        }   
    });
    
    $("#games").click(function() {
        event.preventDefault();
        $("#games #folder-title").css("color", "#181818"); 
        if(g_clicks > 0){
            $("#games #folder-title").css("color", "");  
            $("#games #folder-title").css("color", "#fff");  
            $(".game-file").addClass("hidden");
            g_clicks = 0;
        } else {
            g_clicks++;
        }       
    });
});