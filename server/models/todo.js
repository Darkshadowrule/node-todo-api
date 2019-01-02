const {MongoClient,ObjectID}=require("mongodb")
var obj=new ObjectID()

const mongoose = require('mongoose');
var Todo=mongoose.model("Todo",{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },completed:{
    type:Boolean,
    default:false
  },compat:{
    type:Number,
    default:null
  }
})
module.exports={Todo}
