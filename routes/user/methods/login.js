(()=>{
    const mysqlHelper=require('./../../../common/index')
    module.exports=async(req,res,next)=>{
        const {email,password}=req.body;
        console.log(email);
        const sql="Select name from user where email='"+email+"' and password='"+password+"'";
        const response=await mysqlHelper.mysqlHelp.query(sql);
        console.log(response[0]);
        if(response[0]){
            res.send("www.facebook.com");
        }
    }
})()