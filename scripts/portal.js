$(function() {
    // This base process for the the company clicks
    $("#trilogy").click(function() {
        event.preventDefault();

        $("#company-name").text("Trilogy");
        // $("#company-demo").text("Run Gigatronia");
        $("#company-demo").text("No preview");
        $("#demo-description").html('Notes: ');
        $("#demo-description").append(
            "<p style='padding-left:10px;'> Trilogy is a Third-party company that teams up with universities to host bootcamps. " +
            "My position there is a Teacher Assistant for their full stack MERN (Mongo DB, Express.js, React.js, and Node.js) development bootcamp. " +
            "</p>"
        );

        $(".demo-code").css("background", "");
        $(".demo-image").css("background", ""); 

        $(".demo-image").addClass("trilogy");
        $(".demo-image").removeClass("foster-made");
        $(".demo-image").removeClass("think-of-us");
        $(".demo-image").removeClass("ecpi-uni");

        $(".demo-code").addClass("ecpi-uni-code");
        $(".demo-code").removeClass("think-of-us-code");
        $(".demo-code").removeClass("foster-made-code");
        $(".demo-code").removeClass("ecpi-uni-code");
        

        $("#demo-image-link").attr("href","https://www.trilogyed.com/universities/");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href", "#");
        // $("#demo-code-link").attr("target","_blank");
    }); 
    $("#foster-made").click(function() {
        event.preventDefault();

        $("#company-name").text("Foster Made");
        $("#company-demo").text("Introducing");
        $("#demo-description").html('Notes: ');
        $("#demo-description").append(
            "<p style='padding-left:10px;'> Foster Made is one company I really enjoyed working at. " +
            "Here I received a lot of best practice guidance from my manager and teammates. "
        );

        $(".demo-code").css("background", "");
        $(".demo-image").css("background", "");

        $(".demo-image").addClass("foster-made");
        $(".demo-image").removeClass("think-of-us");
        $(".demo-image").removeClass("ecpi-uni");
        $(".demo-image").removeClass("trilogy");

        $(".demo-code").addClass("foster-made-code");
        $(".demo-code").removeClass("think-of-us-code");
        $(".demo-code").removeClass("ecpi-uni-code");   
        $(".demo-code").removeClass("trilogy-code");   
        
        $("#demo-image-link").attr("href","https://fostermade.co");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href","https://fostermade.co/blog/introducing-thyra-howard");
        $("#demo-code-link").attr("target","_blank");
    }); 
    $("#think-of-us").click(function() {
        event.preventDefault();

        $("#company-name").text("Think of Us");
        $("#company-demo").text("Hacking Foster Care");
        $("#demo-description").html('Notes: ');
        $("#demo-description").append(
            "<p style='padding-left:10px;'>" +
            "Think of Us was the first apprentiship through ECPI. " +
            "I apprenticed/volunteered here for two years. During those two years I had the pleasure of participating in the Hack Foster Care NYC. " +
            "</p>"
        );

        $(".demo-code").css("background", "");
        $(".demo-image").css("background", "");

        $(".demo-image").addClass("think-of-us");
        $(".demo-image").removeClass("foster-made");
        $(".demo-image").removeClass("ecpi-uni");    
        $(".demo-image").removeClass("trilogy");

        $(".demo-code").addClass("think-of-us-code");
        $(".demo-code").removeClass("foster-made-code");
        $(".demo-code").removeClass("ecpi-uni-code");
        $(".demo-code").removeClass("trilogy-code");   

        $("#demo-image-link").attr("href","https://www.thinkof-us.org/");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href","https://www.hackfostercare.org/nyc");
        $("#demo-code-link").attr("target","_blank");
    }); 
    $("#ecpi-uni").click(function() {
        event.preventDefault();

        $("#company-name").text("ECPI University");
        $("#company-demo").text("Creating Commitment");
        $("#demo-description").html(
            'Notes: <br/> '+
            'I have studied at this university. Here I was presented with the presure it takes to be a decent developer.'
        );

        $(".demo-code").css("background", "");
        $(".demo-image").css("background", "");

        $(".demo-image").addClass("ecpi-uni");
        $(".demo-image").removeClass("foster-made");
        $(".demo-image").removeClass("think-of-us");
        $(".demo-image").removeClass("trilogy-code"); 

        $(".demo-code").addClass("ecpi-uni-code");
        $(".demo-code").removeClass("think-of-us-code");
        $(".demo-code").removeClass("foster-made-code");
        $(".demo-code").removeClass("trilogy-code");   

        $("#demo-image-link").attr("href","https://www.ecpi.edu/programs/software-development-bachelor-degree");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href","https://econnect.ecpi.edu/2019/05/perseverance-and-passion-thyra/");
        $("#demo-code-link").attr("target","_blank");
    }); 
    $("#references").click(function() {
        event.preventDefault();

        $("#company-name").text("Shawn Maida");
        $("#company-demo").text("Yuri Tuppince");
        $("#demo-description").html(
            'Notes: <br/>' +
            'These are the lovely people I have/had the pleasure of reporting to as well as working with/for.'
        );

        $(".demo-image").css("background", "url('images/shawn.jpg')"); 
        $(".demo-image").css("background-size", "cover"); 
        $(".demo-code").css("background", "url('images/yuri.jpg')");
        $(".demo-code").css("background-size", "cover"); 

        $("#demo-image-link").attr("href","https://www.linkedin.com/in/shawnmaida/");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href","https://www.linkedin.com/in/yuri-tuppince-phd-35958511/");
        $("#demo-code-link").attr("target","_blank");
    }); 
    $("#videos").click(function() {
        event.preventDefault();

        $("#company-name").text("Kenium");
        $("#company-demo").text("Good News: Thyraellis Howard");
        $("#demo-description").html(
            'Notes: <br/> '+
            'The first video is an intro/update on how the AGI (artificial general intelligence) ' +
            'project with Elias is going. The second video is one on my life and what I did in order to be able to call ' +
            'myself a developer.'
        );

        $(".demo-image").css("background", "url('images/scake-update-1.PNG')"); 
        $(".demo-image").css("background-size", "cover"); 
        $(".demo-code").css("background", "url('images/rrha-picture.PNG')");
        $(".demo-code").css("background-size", "cover"); 

        $("#demo-image-link").attr("href","https://youtu.be/jRLezGjZRwA");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href","https://www.facebook.com/RichmondRedevelopmentAndHousingAuthority/videos/977040375980036/UzpfSTEwMDAwMTY2MjEyNTI3ODozMDYwNjExMjk0OTk0MTQ6MTA6MTU0NjMyOTYwMDoxNTc3ODY1NTk5OjEwNjkwNzg2NDc2NzE2MTQyMTE/");
        $("#demo-code-link").attr("target","_blank");
    }); 
});
    