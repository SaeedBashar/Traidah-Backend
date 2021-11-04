const db = require('../../dbConnect');
const userModel = require('../../models/users/users');

exports.createCart = (req, res, next)=>{
    userModel.createCart(req.body, (output)=>{
    //    console.log(output);
       res.json(output);
    //    res.end("the end")
    });
    res.end();
};

exports.addToCart = (req, res, next)=>{
    let cartData = {
        cartId : req.params.id,
        prodId : req.body.prod_id
    }

    userModel.addToCart(cartData, (output)=>{
    //    console.log(output);
       res.json(output);
    });
}

exports.removeFromCart = (req, res, next)=>{
    let cartData = {
        cartId : req.params.id,
        prodId : req.body.prod_id
    }

    userModel.removeFromCart(cartData, output=>{
        res.json(output);
    })
}

exports.getCart = (req, res, next)=>{
    userModel.getCart(req.params.id, (output)=>{
    //    console.log(output);
       res.json(output);
       res.end();
    })
}
