function A(something){
	console.log(something);
}

function B(callback, something){
	something += "is cool!";
	callback(something);
}

B(A, 'node.js');

B(function(str){
	console.log(str);
}, 'Jade');