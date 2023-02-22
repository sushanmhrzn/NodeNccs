(() => {

    const helper = require("./../../../common/index");
    // const queryHelper=require("./../sql/index");
    module.exports = async(req, res, next) => {
        // valivation'
        // const h={
        //     "name":" ",
        //     "password":"hey",
        //     "email":"hey"
        // }
        // var length = 8,
        //         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        //         retVal = "";
        //     for (var i = 0, n = charset.length; i < length; ++i) {
        //         retVal += charset.charAt(Math.floor(Math.random() * n));
        //     }
        //     console.log(retVal);
        const password= await helper.passwordGenerate.auto();
        console.log(password);
        const {name,address,email,phoneNumber,userTypeid,status}=req.body;
        const createdAt=new Date().getTime();
        // console.log(new Date().getTime());
        const createdBy=null;
        const updatedAt=null;
        const updatedBy=null;
        const sql="Insert into user(name,address,password,email,phoneNumber,userTypeid,status,createdAt,createdBy,updatedAt,updatedBy) Values('"+name+"','"+address+"','"+password+"','"+email+"','"+phoneNumber+"','"+userTypeid+"','"+status+"','"+createdAt+"','"+createdBy+"','"+updatedAt+"','"+updatedBy+"')";
        await helper.mysqlHelp.query(sql);
        // console.log(h.name);
        // await helper.validationHelper.signUp(h.name,h.email,h.password);
        // if(true){
        //     res.send()
        // }
        // const response = await queryHelper.createUser(req.body);
        // // response = await queryHelper(req.body);//Directly included not using index.js
        // console.log(response.status);
        // res.status(200).send(response.message);
        // res.send("HEllo");
    }
})()