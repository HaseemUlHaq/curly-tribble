//var user=require('../models/users.js');
const User= require("../models/users");
const jwt = require('jsonwebtoken');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var hashedPassword = require('password-hash');



exports.getAll=function (req,res,next)
{
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  User.create(req.body).then(function (User)
  {
    res.send(User);
  }).catch(next);
};


exports.authenticate = function (req, res) {
  if (req.body.email != null && req.body.email != "") {
    console.log("in email");
    User.findOne({ email: req.body.email }).select('+Password').exec(function (err, user) {
      if (err) {
        throw err;
      } else if (user) {
        console.log("user found",user);
                  if (user.comparePassword(req.body.Password, function (err, isMatch) {
                    if (isMatch && !err) {
                      delete user.Password;
                        var token = jwt.sign({ user: user }, process.env.jwtsecret, { expiresIn: 1000000 });
                        res.status(200).send({user:user,token:token});

                    } else {
                      res.status(401).send({message:"Email or Password not matched"});
                    }
                  }));

      } else {
  res.status(401).send({message:"Email or Password not matched"});
      }

    });
  }
 else {
    res.status(403).send({ message: "Perameters Missing" });
  }
}

exports.edit=function (req,res,next)
{
  User.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    User.findOne({_id:req.params.id}).then(function (User)
    {
      res.send(User);
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  User.findByIdAndRemove({_id:req.params.id}).then(function(User)
  {
    res.send(User);
    console.log({_id:req.params.id});
  });
};
