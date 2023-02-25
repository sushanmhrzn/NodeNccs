(()=>{
    const schedule=require('node-schedule')
    const {mysqlHelp, cacheHelper}=require('./../../../common/index')
    const hash=require('./../../../common/hasher')
    module.exports=async(req,res,next)=>{
        const {email,password}=req.body;
        // const job = schedule.scheduleJob('* * * * * *', function(){
        //     console.log('Today is recognized by Rebecca Black!');

        //   });
        // console.log(job.scheduleJob);
        // if(hash.comparePassword);
        const sql="Select password from user where email='"+email+"'";
        const response=await mysqlHelp.query(sql);
        console.log("login =======",password,response[0][0].password);
        if(hash.comparePassword(password,response[0][0].password)){
            if(response[0]){
                const key="isLogin"
                const isLogin=true;
                ttl=10000;
                console.log(key,isLogin,ttl);
                const success= await cacheHelper.saveCache("login",true,10000);
                // const success=helper.cacheHelper.saveCache(key,isLogin,ttl);
                console.log(success);
                res.send("Password match");

            }
        }
    }
})()