const mongoose= require("mongoose");
const schema= mongoose.Schema;

//Plaza table
const notificationschema=new schema(
{
  NotificationType:{type:String},
  NotificationDate:{type:String},
  NotificationMsg:{type:String},
  UserID:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
  BillID:{type:mongoose.Schema.Types.ObjectId,ref:'billings'},
  isDeleted:{type:Boolean,default:false}
  }
);

const Notification=mongoose.model("notification",notificationschema);
module.exports=Notification;
