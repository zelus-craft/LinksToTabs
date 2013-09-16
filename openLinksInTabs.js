//"Anonymous" Javascript function. Needs the "javascript:" part for bookmarklet functionality.
javascript:(function(){

	//Create HTML object that holds <a> tag data from a page.
	var links = document.getElementsByTagName("a");
	//Create array for sanitized urls.
	var linklist = [];

	//Grind out the href data from the <a> tags that are not from feedly, and save them.
	for(var i in links) {
	    if(!(/feedly.com/i.exec(links[i].href))) {
		        linklist.push(links[i].href);
		}
	}

	//Function to remove dupliate data from an array.
    function ArrNoDupe(array) {
	    var temp = {};
	    for (var i = 0; i < array.length; i++)
	        temp[array[i]] = true;
	    var r = [];
	    for (var k in temp)
	        r.push(k);
	    return r;
	}

	//Save the array of href data - now without duplicates.
	linklist = ArrNoDupe(linklist);

	//Open each saved href url in a new tab.
	for(var i = 0; i < linklist.length-1; i++) {
			window.open(linklist[i], '_blank');
		}
}());
