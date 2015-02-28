$(document).ready(function(){
    	$(window).scroll(function() {
    		  if($(this).scrollTop()>=100)
    			  {
    			  	$("#menuTab").addClass("scrollTop");
    			  }
    		  else
    			  {
    			  	$("#menuTab").removeClass("scrollTop");
    			  }
    		});
    	
    });