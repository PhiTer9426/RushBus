let http = require('http');
let fs = require('fs');
let urlLib = require('url');

http.createServer(function(req,res){

	res.setHeader('Access-Control-Allow-Origin','*');
	let json = urlLib.parse(req.url,true).query;

	fs.readFile('./studentlist.txt','utf8',function(err,data){
		if(err){
			console.log(err);
		}
		else{
			let jsonData = eval( '(' + data + ')' );
			jsonData.push(json.author);
			fs.writeFile('./studentlist.txt',JSON.stringify(jsonData),function(err){
				if(err){
					console.log(err);
				}
				else{
					fs.writeFile('./feedback/'+json.author+'.txt',json.msg,function(err){
						if(err){
							console.log(err);
						}
						else{
							res.write('发布成功');
							res.end();
						}
					});					
				}
			})	
		}
	});

}).listen(1000);