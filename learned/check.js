var express = require('express');
var bodyParser=require('body-parser');
var app = express();

app.use(express.json());
app.use(express.bodyParser.urlencoded({extends:false}))
app.use('/api',routes)
app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.listen(3000,()=>{
    console.log("Running")
});