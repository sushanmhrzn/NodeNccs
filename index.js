// function test(){
//     console.log("hello");
// }
// test();

// require("express")
const { response } = require('express');
var express=require('express');
var app=express();
const port='3000';

app.use(express.json())
app.use(express.static('public'))
app.get('index.htm',function(req,res){
    res.sendFile(__dirname + "/" +"index.htm");
})

app.get('/process-get',function(req,res) {
    let first_name=req.query.first_name
    console.log(response);
    res.end(JSON.stringify(response));
    console.log(first_name);
    res.send(first_name);
    res.status(201);
})

var server=app.listen(port ,()=>{
    var address=server.address().address
    console.log("Address and port are %s , %s",address, port)
})