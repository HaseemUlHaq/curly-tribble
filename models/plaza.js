const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const Plazaschema=new schema(
  {
//  PlazaID:{type:String,required:[true,"Name is required"]},
  Address:{type:String,required:[true,"Address is required"]},
  TotalShop:{type:String,required:[true,"Total shop number is required"]},
  SAvailable:{type:String,required:[true,"number of Shop available is required"]},
  isDeleted:{type:Boolean,default:false}
  }
);

const Plaza=mongoose.model("plaza",Plazaschema);
module.exports=Plaza;
