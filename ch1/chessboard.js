let size = 8;
for(let row = 0; row < size; row++) {
    if(row%2 == 0) {
	let char  = '';
	for(let column = 0; column < size; column++) {
	    if(column%2 == 0) {
		char += ' ';
	    } else {
		char += '#';
	    }
	}
	console.log(char);
    } else {
	let char  = '';
	for(let column = 0; column < size; column++) {
	    if(column%2 == 0) {
		char += '#';
	    } else {
		char += ' ';
	    }
	}
	console.log(char);
    }
}
