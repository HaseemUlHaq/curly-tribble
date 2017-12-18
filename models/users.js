const mongoose= require("mongoose");
const schema= mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const Userschema=new schema(
{
  UserName:{type:String,required:[true,"Name is required"]},
  UserCNIC:{type:String,required:[true,"CNIC is required"]},
  UserType:{type:String,required:[true,"Type is required"]},
  email: {type:String},
  UserCell:{type:String},
  Password:{type:String,select:false},
  UserSalaray:{type:String,default:0},
  isDeleted:{type:Boolean,default:false}
  }
);

Userschema.pre('save', function (next)
{
  var user = this;
  if (this.isModified('Password') || this.New)
  {
    bcrypt.genSalt(10, function (err, salt)
    {
      if (err)
      {
        return next(err);
      }
      else
      {
        bcrypt.hash(user.Password, salt,null, function (err, hash)
        {
          if (err)
          {
            next(err);
          }
          else
          {
            user.Password = hash;
            next();
          }
        });
      }
    });
  }
  else
  {
    return next();
  }
});

Userschema.methods.comparePassword = function(pw,cb)
{
    bcrypt.compare(pw,this.Password,function(err,isMatch)
    {
        if(err)
        {
            return cb(err);
        }
        else
        {
            cb(null,isMatch);
        }
    });
};

const User=mongoose.model("user",Userschema);
module.exports=User;
