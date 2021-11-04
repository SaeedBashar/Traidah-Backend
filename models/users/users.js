const db = require("../../dbConnect");

const createCartData = (data, cb)=>{
    let sql = "Insert into shopping_cart set ?";

    // cb(data);

    db.query(sql, data, (err, output)=>{
        if(!err){
            cb(output);
        }else{
            console.log(err);
        }
    })
}

const addToCartData = (data, cb)=>{
    let createSql =  `create table if not exists cart_${data.cartId} ( 
                    prod_id int not null, 
                    quantity int not null
                )`;

    let searchSql = `select * from cart_${data.cartId} where prod_id = ${data.prodId}`;

    let updateSql = `update cart_${data.cartId} as A 
                     set A.quantity = A.quantity + 1
                     where A.prod_id = ${data.prodId} `;

    let insertSql = `insert into cart_${data.cartId} set ?`
    

    db.query(createSql, (err, createOutput)=>{
        if(!err){
            console.log(createOutput);
            db.query(searchSql, (err, searchOutput)=>{
               if(!err){
                   if(searchOutput.length == 0){
                       db.query(insertSql, {prod_id: data.prodId, quantity: 1}, (err, insertOutput)=>{
                        //   console.log(insertOutput, "Inserted");
                          cb(insertOutput);
                       })
                   }else{
                       db.query(updateSql, (err, updateOutput)=>{
                        //    console.log(updateOutput, "Updated")
                           cb(updateOutput);
                       })
                   }
               }else{
                   console.log("Error searching table")
               }
            });
        }else{
            console.log("Error Creating Table");
        }
    })
}

const removeFromCartData = (data, cb) => {
      let sql = `update cart_${data.cartId} 
                 set quantity = quantity - 1
                 where prod_id = ${data.prodId}`;

     db.query(sql, (err, output)=>{
         if(!err){
             cb(output);
         }
     })
}

const getCartData = (id, cb)=>{
    let sql = `select * from cart_${id}`;

    db.query(sql, (err, output)=>{
        if(!err){
            cb(output);
        }else{
            console.log("An error Occured while getting cart data");
        }
    })
}

module.exports = {
    createCart: createCartData,
    addToCart: addToCartData,
    removeFromCart: removeFromCartData,
    getCart: getCartData
}
