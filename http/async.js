var c = 0;

function printIt(){
	console.log(c);
}

function plus(){
	setTimeout(function(){
		c += 1;
	}, 1000)
}

plus();
printIt();