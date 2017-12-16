const mongoose=require("mongoose");
const schema=mongoose.Schema;

const postschema=new schema
({
//  PId:{type: String,required:[true,"* Name is required"]},
//  UserID:{type: String,required:[true,"* CNIC is required"]},
  Date:{type:String,required:[true,"Date is required"]},
  Task:{type: String,required:[true,"Task is required"]},
  SentTo:{type: String,required:[true,"SentTo is required"]},
  IsDeleted:{type:Boolean,default:false}
});

const PostTask=mongoose.model("posttask",postschema);

module.exports=PostTask;
