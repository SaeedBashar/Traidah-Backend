const db = require('../../dbConnect');
const adminModel = require('../../models/admin/admin_query');

exports.getProducts = (req, res, next)=>{
    adminModel.getAllProd((output)=>{
       console.log(output);
       res.json(output);
    })
 };

 exports.getProduct = (req, res, next)=>{
     let id = req.params.id;
    //  console.log("This is the id",id);
     adminModel.getProd(id, (output)=>{
        res.json(output[0])
        // res.end();
     });
 }
 
 exports.getCategory = (req, res, next)=>{
     adminModel.getCat((output)=>{
         console.log(output, 'Category fetched Successfully!!');
         res.json(output);
     })
 }

 exports.postProduct = (req, res, next)=>{
     adminModel.postProd(req.body,(output)=>{
         console.log(output);
         res.json('Product Added!!');
     })
    // res.end();
 }

 exports.updateProduct = (req, res, next)=>{
     adminModel.updateProd(req.body,(output)=>{
         console.log(output);
         res.json('Product Updated!!')
     })
 }

 exports.deleteProduct = (req, res, next)=>{
     let id = req.params.id;
     console.log(id);

     adminModel.deleteProd(id, (output)=>{
         console.log("DELETED", output);
         res.json('Product Deleted Successfully!!')
     })
 }