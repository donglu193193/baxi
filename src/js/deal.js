var flag=true;
    $(".toggle").click(function(){
        $("#main1").slideToggle(400);
        if(flag){
            $(this).find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down")
            flag=false;
        }else{
            $(this).find("i").removeClass(" glyphicon-chevron-down").addClass(" glyphicon-chevron-up")
            flag=true;
        }
    });

    $(".delegate11").click(function(){
        $(".delegate22").slideToggle(400);
        if(flag){
            $(this).find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down")
            flag=false;
        }else{
            $(this).find("i").removeClass(" glyphicon-chevron-down").addClass(" glyphicon-chevron-up")
            flag=true;
        }
    });

    $(".record").click(function(){
        $(".history").slideToggle(400);
        if(flag){
            $(this).find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down")
            flag=false;
        }else{
            $(this).find("i").removeClass(" glyphicon-chevron-down").addClass(" glyphicon-chevron-up")
            flag=true;
        }
    });

    $(".news-tab11").click(function(){
        $(".news-tab").slideToggle(400);
        if(flag){
            $(this).find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down")
            flag=false;
        }else{
            $(this).find("i").removeClass(" glyphicon-chevron-down").addClass(" glyphicon-chevron-up")
            flag=true;
        }
    });