const express=require("express");
const router= express.Router();
var path=require('path');

var users=require('../api/users.js');
//const User= require("../models/users");

var plaza=require('../api/plaza.js');
//const Plaza= require("../models/plaza");

var notification=require('../api/notification.js');
//const Notification= require("../models/notification");

var shop=require('../api/shop.js');
var agreement=require('../api/agreement.js');
var expense=require('../api/expense.js');
var billing=require('../api/billings.js')
var posttask=require("../api/PostTask");

//for user table
router.get("/users",users.getAll);
router.post("/users",users.add);
router.put("/users/:id",users.edit);
router.delete("/users/:id",users.isDeleted);
router.post('/authenticate',users.authenticate);

// for plaza table
router.get("/plaza",plaza.getAll);
router.post("/plaza",plaza.add);
router.put("/plaza/:id",plaza.edit);
router.delete("/plaza/:id",plaza.isDeleted);

// for notification table
router.get("/notification",notification.getAll);
router.post("/notification",notification.add);
router.put("/notification/:id",notification.edit);
router.delete("/notification/:id",notification.isDeleted);

// for shop table
router.get("/shop",shop.getAll);
router.post("/shop",shop.add);
router.put("/shop/:id",shop.edit);
router.delete("/shop/:id",shop.isDeleted);

// for agreement table
router.get("/agreement",agreement.getAll);
router.post("/agreement",agreement.add);
router.put("/agreement/:id",agreement.edit);
router.delete("/agreement/:id",agreement.isDeleted);
router.get("/test",agreement.test);
// for expense table
router.get("/expense",expense.getAll);
router.post("/expense",expense.add);
router.put("/expense/:id",expense.edit);
router.delete("/expense/:id",expense.isDeleted);

//for billings table
router.get("/billing",billing.getAll);
router.post("/billing",billing.add);
router.put("/billing/:id",billing.edit);
router.delete("/billing/:id",billing.isDeleted);

//for PostTask table
router.get("/PostTask",posttask.getAll);
router.post("/PostTask",posttask.Adds);
router.put("/PostTask/:id",posttask.Edits);
router.delete("/PostTask/:id",posttask.IsDelete);

module.exports= router;
