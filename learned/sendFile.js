const express= require("express")
const app=express();
const port='3000';
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/abc.txt');//Used for running the files
  });
app.listen(port,()=>{
    console.log("Running");
})