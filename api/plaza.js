//var plaza=require('../models/plaza.js');
const Plaza= require("../models/plaza");

exports.getAll=function (req,res,next)
{
  console.log("listening to plaza");
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  Plaza.create(req.body).then(function (Plaza)
  {
    res.send(Plaza);
  }).catch(next);
};


exports.edit=function (req,res,next)
{
  Plaza.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    Plaza.findOne({_id:req.params.id}).then(function (Plaza)
    {
      res.send(Plaza);
      console.log({_id:req.params.id});
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  Plaza.findByIdAndRemove({_id:req.params.id}).then(function(Plaza)
  {
    res.send(Plaza);
    console.log({_id:req.params.id});
  });
};
