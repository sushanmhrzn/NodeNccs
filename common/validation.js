const alert=require('alert');

((validation)=>{
    validation.signUp=(name,email,password)=>{
        console.log(email);
        if(name == " " || email == "" || password == ""){
            alert("Please Insert all the field properly");
            return false;
        }else{
            return true;
        }
    }
    validation.logIn= async(email,password)=>{
        if(email=="" && password=="") {
            alert("Please enter all the field");
        }
    }
})(module.exports)