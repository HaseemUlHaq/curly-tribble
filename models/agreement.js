const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const Agreementschema=new schema(
  {
//  AgreementNo:{type:String,required:[true,"Name is required"]},
  user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
  ShopID:{type:mongoose.Schema.Types.ObjectId,ref:'shop'},
  Security:{type:String},
  // Timeperiod:{type:String,required:true},
  // AdvanceRent:{type:String,default:0},
    Type:{type:String,required:true,enum:["shop","office"]},
  // Reference1:{type:String,required:true},
  // Reference2:{type:String,required:true},
  // isDeleted:{type:Boolean,default:false}
  });

const Agreement=mongoose.model("agreement",Agreementschema);
module.exports=Agreement;
