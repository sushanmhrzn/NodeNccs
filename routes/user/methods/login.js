
(()=>{
    const schedule=require('node-schedule')
    const mysqlHelper=require('./../../../common/index')
    const hash=require('./../../../common/hasher')
    module.exports=async(req,res,next)=>{
        const {email,password}=req.body;
        // const job = schedule.scheduleJob('* * * * * *', function(){
        //     console.log('Today is recognized by Rebecca Black!');

        //   });
        // console.log(job.scheduleJob);
        // if(hash.comparePassword);
        const sql="Select password from user where email='"+email+"'";
        const response=await mysqlHelper.mysqlHelp.query(sql);
        console.log("login =======",password,response[0][0].password);
        if(hash.comparePassword(password,response[0][0].password)){
            if(response[0]){
                res.send("Password match");
            }
        }
    }
})()