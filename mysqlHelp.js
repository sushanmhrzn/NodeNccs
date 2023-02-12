const mysql=require('mysql2/promise');

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
            let res=dbClient.query(query,fields);
            return res;
        }catch(err){
            console.log(err)
        }
    }
})(module.exports)