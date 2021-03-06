const posttask=require("../models/PostTask");

exports.getAll=function(req,res)
{
  res.send({type:'GET'});
};

exports.Adds=function(req,res,next)
{
  posttask.create(req.body).then(function(posttasks)
  {
    res.send(posttasks);
  }).catch(next);
};

exports.Edits=function(req,res,next)
{
  posttask.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    posttask.findOne({_id:req.params.id}).then(function(posttasks)
    {
      res.send(posttasks);
    });
  }).catch(next);
};

exports.IsDelete=function(req,res,next)
{
  console.log(req.params.id);
  posttask.findByIdAndRemove({_id:req.params.id}).then(function(posttasks)
  {
    res.send(posttasks);
  }).catch(next);
};

exports.all = function(req,res)
{
  posttask.find({}).populate("user").exec(function(error,result)
  {
    if(error)
    {
      res.status(500).send({error:error});
    }
    else
    {
      res.status(200).send({result:result});
    }
  })
}
