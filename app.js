const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConnect');

db.connect((err)=>{
    if(err){
     console.log(err);
    }else{
        console.log("Database Connected Successfully!!");
    }
})

const adminRoutes = require('./routes/admin/admin');
const usersRoutes = require('./routes/users/users');
const coreRoutes = require('./routes/core/login');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.use("/admin",adminRoutes);
app.use("/", coreRoutes);

// app.use("/shared", sharedRoutes);
// app.use("/core", coreRoutes);

app.listen(3000);