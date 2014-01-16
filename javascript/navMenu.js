
$(document).ready(function() {
    $("#openCloseWrap").hover( function() {
		$("#sliderContent").css("display", "block");
		$("#openCloseWrap").hide();
        if ($("#openCloseIdentifier").is(":hidden")) {
			
            $("#slider").animate({
                marginLeft: "1px"
                }, 900 );
				
	           
            $("#topMenuImage").html('');
            $("#openCloseIdentifier").show();
        } else {
            $("#slider").animate({
                marginLeft: "50px"
                }, 900);
				
            $("#openCloseWrap").html('');
			
        }
    }); 
});

		$(document).ready(function(){
			$("div.picture").each(function() {
			$("div.picture").mouseover(function(){
				$(this).find("span").css("display", "block");
				$(this).find("img").css({opacity: '0.5'}, 500);
			

				});
			});

			$("div.picture").each(function() {
			
			$("div.picture").mouseout(function(){
				$(this).find("span").css("display", "none");	
				$(this).find("img").css({opacity: '1'}, 100);
				
		});
		});
	});
	
	
