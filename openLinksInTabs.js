(function () {
	
	// For error checking, I want a list of all of the links.
	var links = document.getElementsByTagName("a"), linklist = [];

	$("a[href^=http]").each(function(){

		//Don't want to open host's links all the time.
		var excludes = [
		'feedly.com',
		'cloud.feedly.com'
		];
      	
      	for(i=0; i<excludes.length; i++) {
      		if(this.href.indexOf(excludes[i]) != -1) {
      			return true; // continue each() with next link
      		}
    	}

	    if(this.href.indexOf(location.hostname) == -1) {

	    	linklist.push(this.href.value);

		   	$(this).click(function() { return true; }); 

		   	$(this).attr({
		   		target: "_blank",
		        title: "new tab"
		    });

	        $(this).click();

	    }
   })
}());
