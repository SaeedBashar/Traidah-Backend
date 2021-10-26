const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin/admin');
const usersRoutes = require('./routes/users/users');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.use("/admin",adminRoutes);
app.use("/", usersRoutes);

// app.use("/shared", sharedRoutes);
// app.use("/core", coreRoutes);

app.listen(3000);