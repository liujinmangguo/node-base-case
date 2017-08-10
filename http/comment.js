var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'conteent': 'qiqiyidai',
	'cid': 348
})

var options = {
	hostname: 'www.imooc.com',
	// .../network/Headers/Request Headers...
}

var req = http.request(options, function(res){
	
	console.log('status:' + res.statusCode)
	
	res.on('data', function(chunk){
        console.log('buffer:' + isBuffer(chunk))
	})
	res.on('end', function(){
		console.log('品论完毕')
	})
})

req.on('error', function(e){
	console.log('error:' + e.message)
})
req.write(postData)
req.end()