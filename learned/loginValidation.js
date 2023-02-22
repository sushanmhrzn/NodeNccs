const { request }=require('http');
var alert=require('alert');

((loginValidate)=>{
    loginValidate.blankValidate =(request)=>{
        if(request.username==" "){
            alert('username Cant be blank')
        }
        if(request.password==" "){
            alert('Password Cant be blank')
        }
        
    }
    loginValidate.userNameExist=(request)=>{
        if(request.username=="sushan"){
            alert('Username already exists')
        }
    }
})(module.exports)