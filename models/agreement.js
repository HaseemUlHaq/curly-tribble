const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const Agreementschema=new schema(
{
  ShopID:[{type: mongoose.Schema.Types.ObjectId,ref: 'shop'}],
  Security:{type:String,},
  Timeperiod:{type:String,required:[true,"Timeperiod is required"]},
  AdvanceRent:{type:String,default:0},
  Type:{type:String,required:[true,"Type is required"]},
  Reference1:{type:String},
  Reference2:{type:String},
  user: [{type: mongoose.Schema.Types.ObjectId,ref: 'user'}],
  isDeleted:{type:Boolean,default:false}
  }
);

const Agreement=mongoose.model("agreement",Agreementschema);
module.exports=Agreement;
