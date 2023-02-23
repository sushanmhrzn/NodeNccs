((passwordGenerate)=>{
    passwordGenerate.auto=async()=>{

        const fs = require('fs'); 

        const hash=require('./hasher')
            var length = 8,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            // console.log(retVal);
            fs.appendFile('./../Text.txt',retVal, 'utf8',
    // callback function
    function(err) {     
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
            const salt=await hash.createSalt();
            // console.log("=======",retVal,salt);
            const pw=await hash.computeHash(retVal,salt);
            console.log(pw);
            return pw
    }
})(module.exports)