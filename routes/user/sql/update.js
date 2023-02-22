(()=>{
    const mysqlHelper=require('./../../../common/index')
    module.exports=async(req,res,next)=>{
        const sql="Update user set status=0 where phoneNumber=0";
        console.log("hi");
        console.log(await mysqlHelper.mysqlHelp.query(sql));
    }
})()