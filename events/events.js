var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.setMaxListeners(12)
life.on('qiuanwei', function(who){
	console.log('gei' + who + '1')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '2')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '3')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '4')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '5')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '6')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '7')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '8')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '9')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '10')
})
life.on('qiuanwei', function(who){
	console.log('gei' + who + '11')
})


function fun12(who){
	console.log('gei' + who + '12')
}
life.on('qiuanwei', fun12)
life.on('qiuniai', function(who){
	console.log('gei' + who + '1')
})

life.removeListener('qiuanwei', fun12)
life.removeAllListeners('qiuniai')
life.emit('qiuanwei', 'friend')
life.emit('qiuniai', 'boyfriend')
