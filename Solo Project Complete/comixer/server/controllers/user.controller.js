const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt.config');
const bcrypt = require('bcrypt');


module.exports.register = (req, res) => {
    User.create(req.body)
      .then(user => {
          const userToken = jwt.sign({
              id: user._id
          }, secret);
          
        //   res.cookie("usertoken", userToken, secret, { httpOnly: true })
          res.cookie("usertoken", userToken, secret)
            .json({ msg: "success!", user: user });
      })
      .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
};




// Method for retrieving all users from the database
module.exports.getAllUsers = (req, res) => {
    User.find({})
    .then(allUsers => res.json(allUsers))
    .catch(err => res.status(400).json(err));   // If the request was not successful return a 400 response code with the errors
}


module.exports.login = async(req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
    // else {return res.json(user)};

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const match = await bcrypt.compare(req.body.password, user.password);
 
    // if(match) {
    //     // password wasn't a match!
    //     // return res.sendStatus(400);
    //     return res.json(match)
    // }
    return res.json(await bcrypt.compare(req.body.password, user.password));
 
    // // if we made it this far, the password was correct
    // const userToken = jwt.sign({
    //     id: user._id
    // }, secret);
 
    // // note that the response object allows chained calls to cookie and json
    // res
    //     .cookie("usertoken", userToken, secret, {
    //         httpOnly: true
    //     })
    //     .json({ msg: "success!" });
};


module.exports.logout = (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
};



// Method for deleting an existing user in the database
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}