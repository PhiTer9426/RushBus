// server.js

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static/'));

app.get('/', function (req, res) {
    console.log('start server');
    // sendFile 函数，在有 request 访问时，将当前目录下的 index.html 文件作为 response 返回
    res.sendFile(__dirname + '/static/index.html');
    console.log('start success');
});

app.get('/feedback.html', function(req, res){

})

// 监听 5050 端口
app.listen(process.env.PORT || 5050);






// let http = require('http');
// let fs = require('fs');
// let urlLib = require('url');

// http.createServer(function(req,res){

// 	res.setHeader('Access-Control-Allow-Origin','*');
// 	let json = urlLib.parse(req.url,true).query;

// 	fs.readFile('./studentlist.txt','utf8',function(err,data){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			let jsonData = eval( '(' + data + ')' );
// 			jsonData.push(json.ID + ' ' + json.time);
// 			fs.writeFile('./studentlist.txt',JSON.stringify(jsonData),function(err){
// 				if(err){
// 					console.log(err);
// 				}
// 				else{
// 					fs.writeFile('./feedback/' + json.ID + '.txt', json.msg + json.time, function(err){
// 						if(err){
// 							console.log(err);
// 						}
// 						else{
// 							res.write('发布成功');
// 							res.end();
// 						}
// 					});	
// 				}
// 			})	
// 		}
// 	});

// }).listen(1000);


// http.createServer(function(req,res){

// 	res.setHeader('Access-Control-Allow-Origin','*');
// 	let json = urlLib.parse(req.url,true).query;

// 	fs.writeFile('./location/' + json.ID + '.txt', json.location + json.time, function(err){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			res.write('发布成功');
// 			res.end();
// 		}
// 	});	

// }).listen(1001);