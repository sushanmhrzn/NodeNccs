//These are the module/fucntion that provides support services to our project 
// we use export to pull function from one module to another
// var sum= function(a,b){
//     return a+b;
// }

const { request } = require("http");
const httpStatus = require("http-status");

// sum(2,4)
// module.exports.sum=sum;

((calculationHelper /*filename*/ )=>{ // Self callable function
    calculationHelper.sum=(a,b)=>{
        setTimeout(()=>{
            console.log("hey");
        },10000);
        return a+b;
    }
    calculationHelper.multiply=function(a,b){
        return a*b;
    }
     calculationHelper.login = async(request)=>{
        const isValid=await calculationHelper.loginValidation(request);//Firstly this method is called as we need to valid the user before processing
        if(isValid){
            console.log(request.username);
        }
        else{
            console.log('fail');
        }
        // if(!isValid){
        // return {status:httpStatus.BAD_GATEWAY, message :"Username"};
        // }
     }
     calculationHelper.loginValidation = (request)=>{
        if(request.username=="sushan"){
            return true;
        }
        return false;
     }
})(module.exports)