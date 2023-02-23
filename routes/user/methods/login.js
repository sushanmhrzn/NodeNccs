
(()=>{
    const schedule=require('node-schedule')
    const mysqlHelper=require('./../../../common/index')
    module.exports=(req,res,next)=>{
        // const {email,password}=req.body;
        const job = schedule.scheduleJob('* * * * * *', function(){
            console.log('Today is recognized by Rebecca Black!');
          });
        console.log(job.scheduleJob);
        // const sql="Select name from user where email='"+email+"' and password='"+password+"'";
        // const response=await mysqlHelper.mysqlHelp.query(sql);
        // console.log(response[0]);
        // if(response[0]){
        //     res.send("www.facebook.com");
        // }
    }
})()