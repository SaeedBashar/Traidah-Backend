const db = require("../../dbConnect");

const getCategoryData = (cb)=>{
    let sql = "select * from Category";

    db.query(sql, (err, output)=>{
        if(!err){
            cb(output);
        }else{
            console.log("An Error Occured", err);
        }
    })
}

const postProductData = (product, cb) => {
    
    let sql = "insert into Products set ?";
    
    db.query(sql, product, (err, output)=>{
       if(!err){
           cb(output);
       }else{
           console.log("An error Occured", err);
       }
    });
    
}

const updateProductData = (product, cb) => {
    
    let sql = "update Products set prod_name=?, cat_id=?, prod_desc=?, price=?,prod_img=? where prod_id=?";
    
    db.query(sql, [product.prod_name, product.cat_id, product.prod_desc, product.price, product.prod_img, product.prod_id ], (err, output)=>{
       if(!err){
           cb(output);
       }else{
           console.log("An error Occured", err);
       }
    });
    
}

const getProductsData = (cb)=>{
    let sql = "select * from products";

    db.query(sql, (err, output)=>{
       if(!err){
           cb(output);
       }else{
           console.log("An error occured", err);
       }
    });
}

const getProductById = (id, cb)=>{
    let sql = "select * from products where prod_id = ?";

    db.query(sql, id, (err, output)=>{
        if(!err){
            cb(output);
        }else{
            console.log("An error occured");
        }
    })
}

module.exports = {
    getCat: getCategoryData,
    getAllProd: getProductsData,
    getProd: getProductById,
    postProd: postProductData,
    updateProd: updateProductData
}