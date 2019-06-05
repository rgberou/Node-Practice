function firstDuplicate(a) {

	var ret=-1;
	for (var i = 0; i < a.length; i++) {
		for (var ind = 0; ind < a.length; ind++) {
			console.log('i '+i);
			console.log('ind '+ind);
			if (i!=ind){
				if(a[i]==a[ind]){
					ret=a[ind];
					break;
				}
			}
		}
	}

	return ret;
 
}


console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))