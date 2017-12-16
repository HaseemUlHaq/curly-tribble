const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Users table
const Billingschema=new schema(
  {
//  BillID:{type:String,required:[true,"Name is required"]},
  BillNo:{type:String,required:[true,"BillNo is required"]},
//  ShopID:{type:String,required:[true,"Type is required"]},
  BillAmount:{type:String,required:[true,"Bill amount is required"]},
  BillMonth:{type:String,required:[true,"Bill month is required"]},
  BillStatus:{type:String,required:[true,"Bill status is required"]},
  ChequeNo:{type:String},
  isDeleted:{type:Boolean,default:false}
  }
);

const Billing=mongoose.model("billings",Billingschema);
module.exports=Billing;
