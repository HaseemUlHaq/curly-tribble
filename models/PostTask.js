const mongoose=require("mongoose");
const schema=mongoose.Schema;

const postschema=new schema
({
  user: [{type: mongoose.Schema.Types.ObjectId,ref: 'user'}],
  Date:{type:String,required:[true,"Date is required"]},
  Task:{type: String,required:[true,"Task is required"]},
  SentTo:{type: String,required:[true,"SentTo is required"]},
  IsDeleted:{type:Boolean,default:false}
});

const PostTask=mongoose.model("posttask",postschema);

module.exports=PostTask;
