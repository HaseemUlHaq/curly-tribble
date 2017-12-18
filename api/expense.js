const Expense= require("../models/expense");

exports.getAll=function (req,res,next)
{
  console.log("listening to Expense");
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  Expense.create(req.body).then(function (Expense)
  {
    res.send(Expense);
  }).catch(next);
};


exports.edit=function (req,res,next)
{
  Expense.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    Expense.findOne({_id:req.params.id}).then(function (Expense)
    {
      res.send(Expense);
      console.log({_id:req.params.id});
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  Expense.findByIdAndRemove({_id:req.params.id}).then(function(Expense)
  {
    res.send(Expense);
    console.log({_id:req.params.id});
  });
};


exports.all = function(req,res)
{
  Expense.find({}).populate("user").populate("ShopID").populate("PlazaID").exec(function(error,result)
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
