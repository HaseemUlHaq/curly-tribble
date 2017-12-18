const express=require("express");
const routes= require("./routes/route.js");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");

const app= express();

mongoose.connect("mongodb://admin:admin@ds115396.mlab.com:15396/fyp");
mongoose.Promise=global.Promise;

app.use(bodyParser.json());

app.use("/api",routes);

app.use(function (err,req,res,next) {
  //console.log(err);
  res.status(422).send({error: err.message});
});

app.listen(process.env.port||3000,function (){
  console.log("**you are listeninig for request**");

})
process.env.jwtsecret = '$2a$06$GXmQiERBvYRGD91bIJLWRO2m4WGUpj7IRuSuve3pZ3B5rRtLIzm2G';
