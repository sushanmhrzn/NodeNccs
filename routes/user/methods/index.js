(()=>{
    module.exports={
        userSignup: require('./signup'),
        userReq: require('../sql/userRequest'),
        userLogin: require('./login')
    }
})()