const express= require('express')
const res = require('express')
const app= express()
const port='3000'
const bodyParser = require('body-parser');//need to parse the body object such as json text
const calculationHelper=require('./calculationHelper');//Importing calculation function in the server

app.use(bodyParser.json()) ;
app.use(bodyParser.text()) ;
app.use(bodyParser.urlencoded({extended:false}));

app.get('/profile/:start/:end', function (req, res) {
    console.log("Starting Page: ", req.params['start']);
    console.log("Ending Page: ", req.params['end']);
    res.send();
    
})

app.get('/sum',function(req,res){
  let sum=calculationHelper.sum(3,4);
  // console.log(sum);
  let multiply=calculationHelper.multiply(5,6);
  console.log("The sum is %s and the multiply is %s",sum,multiply);
  res.send();
});
// function sum(){
//   let a = parseInt(req.query['n1']);
//   let b = parseInt(req.query['n1']);
//   const sum=a+b;
//   console.log(sum);
//   res.send();
// }
app.get('/welcome',(req,res) => {
  res.send("Password and username matched");
  // req.headers['content-type'];
  // res.status(201).send("hello");
})

app.post('/json',(req,res) => {
  res.send(req.body);
  res.status(201).send("hello");
})

const ab={
  "username":"sushan",
  "password":"helloworld"
}

 app.post('/login',(req,res) => {
   if(calculationHelper.login(ab)){
    if(loginValidate.userNameExist(ab)){
      if(loginValidate.blankValidate(ab)){
        res.redirect("http://localhost:3000/welcome");
      }
    }    
   }else{
    res.send("Try agian");
   }
  //  res.status(201).send("hello");
 })

//  app.get('/photo',(req,res) => {
//    res.download('p.jpg', function(error){
//      console.log("Error : ", error)
//  });

//  app.get('/get',(req,res)=>{
//   // console.log(req.params['id']);
//   res.send("send")
//  })
// })
var server= app.listen(port,()=>{
   var host=server.address().address
   var port=server.address().port 
   console.log(`example of listening port on ${port} and host on ${host})`)
 })
