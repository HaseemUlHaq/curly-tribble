//var plaza=require('../models/plaza.js');
const Agreement= require("../models/agreement");

exports.getAll=function (req,res,next)
{
  console.log("listening to Agreement");
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  var params = req.body;
  console.log(params)
  Agreement.create({
    user:params.user,
    Security:params.Security
  }).then(function (Agreement)
  {
    console.log("Added result: ",Agreement)
    res.send(Agreement);



    
  }).catch(next);
};

exports.test = function(req,res){
  Agreement.find({}).populate("user").populate('ShopID').sort({sort:1}).exec(function(error,result){
    if(error){
      res.status(500).send({error:error});
    }else{
      res.status(200).send({result:result});
    }
  })
}
exports.edit=function (req,res,next)
{
  Agreement.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    Agreement.findOne({_id:req.params.id}).then(function (Agreement)
    {
      res.send(Agreement);
      console.log({_id:req.params.id});
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  Agreement.findByIdAndRemove({_id:req.params.id}).then(function(Agreement)
  {
    res.send(Agreement);
    console.log({_id:req.params.id});
  });
};
