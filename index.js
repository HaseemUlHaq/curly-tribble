const express=require("express");
const routes= require("./routes/route.js");
const app= express();
const bodyParser= require("body-parser");
const mongoose= require("mongoose");

//connect mongoDB
mongoose.connect("mongodb://admin:admin@ds161493.mlab.com:61493/fyp");
mongoose.Promise=global.Promise;
  process.env.jwtsecret = '$2a$06$GXmQiERBvYRGD91bIJLWRO2m4WGUpj7IRuSuve3pZ3B5rRtLIzm2G';
app.use(bodyParser.json());

app.use("/api",routes);

app.use(function (err,req,res,next) {
  //console.log(err);
  res.status(422).send({error: err.message});
})



app.listen(process.env.port||3000,function (){
  console.log("**you are listeninig for request**");
})
