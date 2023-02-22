(()=>{
    const mysqlHelper=require('../../../common/index');

    module.exports= async(req,res,next)=>{
        // console.log(Object.keys(req).length === 0);
        if(Object.keys(req).length === 0 == true){
            console.log((req.body))
            const sql="Select * from userType";
            const respone= await mysqlHelper.mysqlHelp.query(sql);
            console.log(respone[0]);
        }
        if(Object.keys(req).length === 0 == false){
            if(req.body.id){
                const id=req.body;
                const sql="Select * from userType where id="+id.id+"";
                const respone= await mysqlHelper.mysqlHelp.query(sql);
                console.log(respone[0]);
            }
            if(req.body.name){
                const name1=req.body;
                const sql="Select * from userType where name='"+name1.name+"'";
                const respone= await mysqlHelper.mysqlHelp.query(sql);
                console.log(respone[0]);
            }
            // const id=req.body;
            // const sql="Select * from userType where id="+id.id+"";
            // const respone= await mysqlHelper.mysqlHelp.query(sql);
            // console.log(respone[0]);
        }
        // if(!req.body){
        //     const id=req.body;
        //     console("hey");
        //     const sql="Select * from userType where id="+id.id+"";
        //     const respone= await mysqlHelper.mysqlHelp.query(sql);
        //     console.log(respone[0]);
        // }
    }
})()
// (() => {

//     const helper = require("./../../../common/index");
//     // const queryHelper=require("./../sql/index");
//     module.exports = async(req, res, next) => {
//         // valivation'
//         const h={
//             "name":" ",
//             "password":"hey",
//             "email":"hey"
//         }
//         console.log(h.name);
//         await helper.validationHelper.signUp(h.name,h.email,h.password);
//         // if(true){
//         //     res.send()
//         // }
//         // const response = await queryHelper.createUser(req.body);
//         // // response = await queryHelper(req.body);//Directly included not using index.js
//         // console.log(response.status);
//         // res.status(200).send(response.message);
//         res.send("HEllo");
//     }
// })()