const db = require('../../dbConnect');
const auth_user = require('../../models/core/core_query');

function UserData(fname, lname, logged_in, role){
    this.fname = fname;
    this.lname = lname;
    this.logged_in = logged_in;
    this.role = role;
}

module.exports = (req, res, next)=>{      
       auth_user((el)=>{   //callback to Authenticate User
           let user = new UserData(el.fname, el.lname, el.logged_in, el.role);
           res.json(user);
        });
 };