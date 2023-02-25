const NodeCache = require("node-cache");
const myCache=new NodeCache();
((cacheHelper)=>{
    cacheHelper.saveCache = async(key,value,ttl)=>{
        const success=await myCache.set(key,value,ttl);
        return success;
    }
    cacheHelper.getCache=async(key)=>{
        const value=myCache.get(key);
        return value;
    }
})(module.exports)