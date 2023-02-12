const order=[
    {fruits:"manngo", qty:10},
    {fruits:"grapes", qty:10},
]

async function orders(){
    setTimeout(()=>{
        console.log(order);
    },3000)
}

async function addNewItem(){
await NewItem();
getOrderItems();
    
    // setTimeout(()=>{
    //     order.push({fruits:"apple",qty:4})
    //     callback();
    // },6000)  
    // return new Promise((resolve,reject)=>{
    //     const err=false;
    //     setTimeout(()=>{
    //     order.push({fruits:"apple",qty:4})
    //     if(err)
    //     reject()
    //     resolve(true);    
    // },6000)  
    // })
}
 
function NewItem(){
    return new Promise((resolve,reject)=>{//When something lagg for example here the timer is 6 sec so we use promise
        setTimeout(()=>{
            order.push({fruits:"apple",qty:4})
            resolve(true)
        },6000)  
    })
}
function getOrderItems(){
    console.log("Items==",order)
}

addNewItem();
// addNewItem().then((reponse)=>{
// console.log("OK");
// getOrderItems();
// }).catch((err)=>{
// console.log("erroe 404");
// })
