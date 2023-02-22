(()=>{
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    const sqlHelp= require('./sql')
    
    
    router.post('/sign-up',userController.userSignup);
    router.post('/login',userController.userLogin);
    // module.exports=router;
    router.post('/userData',sqlHelp.userReq);
    router.post('/deactive',sqlHelp.userDeactivate);
    module.exports = router;
})()