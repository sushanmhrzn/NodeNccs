const alert=require('alert');
const mysqlhelp=require('./mysqlHelp');

((validation)=>{
    validation.signupValidation = (name,email,password)=>{
        if(name == "" || email == "" || password == ""){
            alert("Please Insert all the field properly");
        }else{
            return true;
        }
        // mysqlhelp.init();
        // mysqlhelp.query('Select email from `customer`');
    } 
})(module.exports)