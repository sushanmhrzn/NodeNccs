(() => {

    const helper = require("./../../../common/index");
    // const queryHelper=require("./../sql/index");
    module.exports = async(req, res, next) => {
        // valivation'
        const h={
            "name":" ",
            "password":"hey",
            "email":"hey"
        }
        console.log(h.name);
        await helper.validationHelper.signUp(h.name,h.email,h.password);
        // if(true){
        //     res.send()
        // }
        // const response = await queryHelper.createUser(req.body);
        // // response = await queryHelper(req.body);//Directly included not using index.js
        // console.log(response.status);
        // res.status(200).send(response.message);
        res.send("HEllo");
    }
})()