const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const notificationschema=new schema(
  {
  NotificationType:{type:String,required:[true,"Type is required"]},
  NotificationDate:{type:String,required:[true,"Date is required"]},
  NotificationMsg:{type:String,required:[true,"Message is required"]},
//  UserID:{type:String},
//  BillID:{type:String,default:0},
  isDeleted:{type:Boolean,default:false}
  }
);

const Notification=mongoose.model("notification",notificationschema);
module.exports=Notification;
