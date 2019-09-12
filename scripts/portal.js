$(function() {
    // This base process for the the company clicks
    $("#trilogy").click(function() {
        event.preventDefault();

        $("#company-name").text("Trilogy");
        // $("#company-demo").text("Run Gigatronia");
        $("#company-demo").text("No preview");
        $("#demo-description").html('Developer Notes: ');
        $("#demo-description").append(
            "<p style='padding-left:10px;'> Trilogy is a Third-party company that teams up with universities to host bootcamps. " +
            "My position there is a Teacher Assistant for their full stack MERN (Mongo DB, Express.js, React.js, and Node.js) development bootcamp. " +
            "The bootcamp gives the students an intro into programming and then dives deep into the technical skills. " +
            "Because of this process the students will have a lot of questions which is where me and my teammates come in. " +
            "I have the pleasure of not only guiding students through HTML, CSS, Bootstrap, JavaScript languages, AJAX, MySQL - TSQL, Mongo DB - NoSQL, Git, and deployment of these languages using Heroku." +
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
        $("#demo-description").html('Developer Notes: ');
        $("#demo-description").append(
            "<p style='padding-left:10px;'> Foster Made is one company I really enjoyed working at. " +
            "Here I received a lot of best practice guidance from my manager and teammates. " +
            "My position there was CMS Developer Apprentice mostly managing plugins. " +
            "The languages and CMS tools I used were PHP, Twig, ExpressionEngine 5, and Craft3. " +
            "\n My main task there was administering bug fixes on their addon called the " +
            "<a href='https://github.com/fostermadeco/indexernator/issues' style='color:#181818'> Indexernator. </a>" +
            "(Github Username of Trymory)</p>"
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
        $("#demo-description").html('Developer Notes: ');
        $("#demo-description").append(
            "<p style='padding-left:10px;'>" +
            "Think of Us was the first apprentiship through ECPI. " +
            "I apprenticed/volunteered here for two years. During those two years I had the pleasure of participating in the Hack Foster Care NYC. " +
            "After that I got involved in their internal hackathons where I got my first intro into C#, Front-end Development and object oriented programming." +
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
        $("#demo-description").html('Developer Notes: The article states about everything');


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
        $("#demo-description").html('Developer Notes: ');

        $(".demo-image").css("background", "url('images/shawn.jpg')"); 
        $(".demo-image").css("background-size", "cover"); 
        $(".demo-code").css("background", "url('images/yuri.jpg')");
        $(".demo-code").css("background-size", "cover"); 

        $("#demo-image-link").attr("href","https://www.linkedin.com/in/shawnmaida/");
        $("#demo-image-link").attr("target","_blank");
        $("#demo-code-link").attr("href","https://www.linkedin.com/in/yuri-tuppince-phd-35958511/");
        $("#demo-code-link").attr("target","_blank");
    }); 
});
    