javascript:(function(){

	var links = document.getElementsByTagName("a"), linklist = [];

	for(var i in links) {
	    if(!(/feedly.com/i.exec(links[i].href))) {
		        linklist.push(links[i].href);
		}
	}

    function ArrNoDupe(array) {
	    var temp = {};
	    for (var i = 0; i < array.length; i++)
	        temp[array[i]] = true;
	    var r = [];
	    for (var k in temp)
	        r.push(k);
	    return r;
	}

	unique_list = ArrNoDupe(linklist);

	for(var j in unique_list) {
		window.open(unique_list[j], '_blank');
	}

}());