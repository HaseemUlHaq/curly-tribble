const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const Shopschema=new schema(
  {
//  ShopID:{type:String,required:[true,"Name is required"]},
  ShopNo:{type:String,required:[true,"ShopNo is required"]},
//  PlazaID:{type:String,required:[true,"Type is required"]},
  ShopSize:{type:String,required:[true,"ShopSize is required"]},
  ShopRent:{type:String,required:[true,"ShopRent is required"]},
  isDeleted:{type:Boolean,default:false}
  }
);

const Shop=mongoose.model("shop",Shopschema);
module.exports=Shop;
