const order=[
    {fruits:"manngo", qty:10},
    {fruits:"grapes", qty:10},
]

function orders(){
    setTimeout(()=>{
        console.log(order);
    },3000)
}

function addNewItem(){
    // setTimeout(()=>{
    //     order.push({fruits:"apple",qty:4})
    //     callback();
    // },6000)  
    return new Promise((resolve,reject)=>{
        const err=false;
        setTimeout(()=>{
        order.push({fruits:"apple",qty:4})
        if(err)
        reject()
        resolve(true);    
    },6000)  
    })
}
 
function getOrderItems(){
    console.log("Items==",order)
}

addNewItem().then((reponse)=>{
console.log("OK");
getOrderItems();
}).catch((err)=>{
console.log("erroe 404");
})
