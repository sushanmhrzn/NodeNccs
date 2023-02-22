(()=>{
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    
    
    router.post('/sign-up',userController.userSignup);
    // module.exports=router;
    router.post('/userData',userController.userReq);
    module.exports = router;
})()