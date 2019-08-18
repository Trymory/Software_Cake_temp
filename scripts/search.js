$(function() {
    $("#filer-text").keyup(function() {
        event.preventDefault();
        var search_key = document.getElementById('filer-text').value;
        var search_keys = search_key.split(' ');
        var selected_name = null;
        var search_class = null;
        if(search_key.includes(',')){
            search_keys += search_key.split(',');
        }

        $(".files").addClass("hidden");
        $(".files").removeClass("display");

        for (const key in search_keys) {  
            if(search_keys[key] != '' && search_keys[key] != null){
                search_class = "." + search_keys[key];
                $(search_class).addClass("display");
                $(search_class).removeClass("hidden");
            }
            
            switch(search_keys[key].toLowerCase()){
                case 'thyra':
                case 'thyra\'s':
                case 'thyraellis':
                case 'thyraellis\s':
                case 'howard':
                case 'howard\'s':
                case 'ms.howard':
                case 'ms.howard\'s':
                    selected_name = "Thyraellis Howard";
                break;
            }

            if(search_keys[key] == 'resume'){
                var demo = document.getElementById('demo-description');
                if(selected_name != '' && selected_name != null) {
                    console.log(selected_name);
                    demo.innerHTML = 
                        "<p>" +
                            "You have requested to see Ms. Howard's resume. Click this link to download it " +
                            "<a href='files/resumes/"+ selected_name +".docx'>" +
                            selected_name + "'s Resume" +
                            "</a>" +
                        "</p>";  
                }                  
            }
        }

        if(search_key == ''){
            console.log('here');
            $(".files").addClass("display");
            $(".files").removeClass("hidden");
        }

    });
    $("#search-btn").click(function() {
        $("#filer-text").keyup();
    });
});