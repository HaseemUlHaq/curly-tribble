const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const Expenseschema=new schema(
  {
  Date:{type:String,required:[true,"Date is required"]},
  Description:{type:String},
  Amount:{type:String,required:[true,"Amount is required"]},
  Type:{type:String,required:[true,"Type is required"]},
  Status:{type:String,default:0,required:[true,"Status is required"]},
//  PlazaID:{type:String},
//  UserID:{type:String},
//  ShopID:{type:String},
  isDeleted:{type:Boolean,default:false}
  }
);

const Expense=mongoose.model("expense",Expenseschema);
module.exports=Expense;
