const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Users table
const Billingschema=new schema(
  {

  BillNo:{type:String,required:[true,"BillNo is required"]},
  ShopID:{type:mongoose.Schema.Types.ObjectId,ref:'shop'},
  BillAmount:{type:String},
  BillMonth:{type:String},
  BillStatus:{type:String},
  ChequeNo:{type:String},
  isDeleted:{type:Boolean,default:false}
  }
);

const Billing=mongoose.model("billings",Billingschema);
module.exports=Billing;
