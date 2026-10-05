function processOrder(){
  return new Promise((resolve,reject)=>{
    console.log("Processing Order...")
    
    setTimeout(()=>{
      let success = true;
      if(success){
        resolve({
          orderid: 42017,
          customer: "Shihab",
          item: "Chicken Burger",
          quantity: 2,
          total: 500,
        })
      }
      else{
        reject("Failed to process order!")
      }
    },3000)
  })
}

processOrder().then((data) => {
        console.log("Order Id: ",data.orderid);
        console.log("Customer: ",data.customer);
        console.log("Item: ",data.item);
        console.log("Quantity: ",data.quantity);
        console.log("Total: ",data.total);
        
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
      console.log("Order processing completed")
    })


