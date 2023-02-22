const express= require('express');
const app= express();
const port='3000'
// const mysqlHelper=require('./common/mysqlhelp');
const mysqlHelp=require('./common/mysqlhelp')
//const validate=require('./validation');
const bodyParser = require('body-parser');//need to parse the body object such as json text
//const calculationHelper=require('./learned/calculationHelper');//Importing calculation function in the server
// const { Router } = require('express');

require('dotenv').config();//Used for all files
(process.env.MYSQL_DB_USER);


app.use(express.json()) ;
app.use(bodyParser.urlencoded({extended:false}));

const routes=require('./routes/routes');
app.use('/api',routes);

var server= app.listen(port,()=>{
  mysqlHelp.init();
  var host=server.address().address
  var port=server.address().port 
  console.log(`example of listening port on ${port} and host on ${host})`)
})
/*
app.get('/profile/:start/:end', function (req, res) {
    console.log("Starting Page: ", req.params['start']);
    console.log("Ending Page: ", req.params['end']);
    res.send();
    
})

app.get('/sum',function(req,res){
  // let sum=calculationHelper.sum(3,4);\
  sum();
  console.log(sum);
  let multiply=calculationHelper.multiply(5,6);
  console.log("The sum is %s and the multiply is %s",sum,multiply);
  res.send();
});
function sum(){
  let a = parseInt(req.query['n1']);
  let b = parseInt(req.query['n1']);
  const sum=a+b;
  console.log(sum);
  res.send();
}
app.get('/welcome',(req,res) => {
  res.send("Password and username matched");
  // req.headers['content-type'];
  // res.status(201).send("hello");
})

app.post('/json',(req,res) => {
  // res.send(req.body);
  res.status(201).send("hello");
})

const ab={
  "user":"osu",
  "age":"26"
}

 app.post('/login',(req,res) => {
   if(calculationHelper.login(ab)){
    if(loginValidate.userNameExist(ab)){
      if(loginValidate.blankValidate(ab)){
        res.redirect("http://localhost:3000/welcome");
      }
      
    }    
   }else{
    res.send("Try again");
   }
  //  res.status(201).send("hello");
 })
 app.post('/signup',(req,res)=>{
  const {name,email,password}=req.body;
  // // console.log(typeof(name));
  // console.log(typeof(name));
  let check=validate.signupValidation(name,email,password);
  if(check){
    let query= "INSERT INTO `customer`(name,email,password)  VALUES ('"+name+"','"+ email+"','"+ password+"')";
    // let query='Select * from `customer`';
    mysqlHelper.query(query);
  }else{
    console.log("please re enter again")
  }
  // var sql = "INSERT INTO customers (name, email, password) VALUES ('Company Inc', 'Highway 37', 'OKK')";
  // mysqlHelper.query(sql)
  res.status(201).send("HEllo");
  // res.send("hello");
 })


//  app.get('/photo',(req,res) => {
//    res.download('p.jpg', function(error){
//      console.log("Error : ", error)
//  });

//  app.get('/get',(req,res)=>{
//   console.log(req.query['name']);
//   res.send("send");
//  })
// })
*/

