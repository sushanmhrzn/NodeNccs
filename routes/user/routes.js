(()=>{
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    const sqlHelp= require('./sql');
    const {middlewareHelper}=require('./../../common/index');
    
    router.post('/sign-up',userController.userSignup);
    router.post('/login',userController.userLogin);
    // module.exports=router;
    router.post('/userData',middlewareHelper.isAuthenticate,sqlHelp.userReq);
    router.post('/deactive',sqlHelp.userDeactivate);
    module.exports = router;
})()