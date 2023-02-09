const order=[
    {fruits:"manngo", qty:10},
    {fruits:"grapes", qty:10},
]

function orders(){
    setTimeout(()=>{
        console.log(order);
    },3000)
}

function addNewItem(callback/*Example of callback function*/){
    setTimeout(()=>{
        order.push({fruits:"apple",qty:4})
        callback();
    },6000)  
}
 
function getOrderItems(){
    console.log("Items==",order)
}

addNewItem(getOrderItems)//This is simple a example where addNewItem repsone is slower that getting order so we dont get apple in our output so we use callback function
// getOrderItems(orders);
