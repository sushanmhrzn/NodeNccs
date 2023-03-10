const mysql=require('mysql2/promise');
const alert=require('alert');

((mysqlhelp) =>{
    let dbClient=null;
    // let tranConn=null;
    mysqlhelp.init = async () =>{
        try{  
            if(!dbClient){
                dbClient= await mysql.createPool({
                    host:process.env.MYSQL_DB_HOST,
                    user:process.env.MYSQL_DB_USER,
                    database:process.env.MYSQL_DB_NAME,
                    password:process.env.MYSQL_DB_PASSWORD,
                })
                console.log('Connected') 
            }
            return dbClient;
        }catch (err){
            console.log(err);
        }
    }
    mysqlhelp.query=async(query,fields,metaData)=>{
        try{
            // let res =(tranConn || dbClient).query(query.fields);
            let res= await dbClient.query(query,fields);
            // alert("Data entered successfully");
            // console.log(res);

            return res;
        }catch(err){
            console.log(err)
        }
    }
})(module.exports);