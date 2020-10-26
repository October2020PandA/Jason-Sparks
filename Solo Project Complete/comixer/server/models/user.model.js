const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
      },      
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Must be 8 characters or longer"]
    }
  }, {timestamps: true});


  // add this after UserSchema is defined
  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', "Passwords don't match!");
    }
    next();
  });
  

  UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

  module.exports.User = mongoose.model('User', UserSchema);
