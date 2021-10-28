const db = require("../../dbConnect");

const auth_user = (cb)=>{
    let sql = "select * from customers as A, customer_auth as B where A.cus_id = B.cus_id";
    
    db.query(sql, (err, output)=>{
        if(!err){
            // console.log(output, 'select successfully');
            cb(output[0]);
        }
        else{
            console.log("An Error Occured",err);
        }
    });   
};


module.exports = auth_user;