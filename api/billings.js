//var user=require('../models/users.js');
const Billing= require("../models/billings");

exports.getAll=function (req,res,next)
{
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  Billing.create(req.body).then(function (Billing)
  {
    res.send(Billing);
  }).catch(next);
};

exports.edit=function (req,res,next)
{
  Billing.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    Billing.findOne({_id:req.params.id}).then(function (Billing)
    {
      res.send(Billing);
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  Billing.findByIdAndRemove({_id:req.params.id}).then(function(Billing)
  {
    res.send(Billing);
    console.log({_id:req.params.id});
  });
};


exports.all= function(req,res)
{
  Billing.find({}).populate("ShopID").exec(function(error,result)
  {
    if(error)
    {
      res.status(500).send({error:error});
    }
    else {
      res.status(200).send({result:result});
    }
  })
}
