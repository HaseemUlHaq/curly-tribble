const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const Shopschema=new schema(
{
  ShopNo:{type:String,required:[true,"ShopNo is required"]},
  PlazaID:[{type: mongoose.Schema.Types.ObjectId,ref: 'plaza'}],
  ShopSize:{type:String,required:[true,"ShopSize is required"]},
  ShopRent:{type:String,required:[true,"ShopRent is required"]},
  isDeleted:{type:Boolean,default:false}
}
);

const Shop=mongoose.model("shop",Shopschema);
module.exports=Shop;
