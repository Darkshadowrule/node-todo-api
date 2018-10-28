const {MongoClient,ObjectID}=require("mongodb")
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err)
  return console.log("Unable to connect",err);
  console.log("Connected");
 // db.collection("Todos").findOneAndUpdate({
 //   _id:new ObjectID("5bd45e0f1d7f012904808fcd")
 // },{
 //   $set:{
 //     text:"Darkshadowrules"
 //   }
 // },{
 //   returnOriginal:false
 // }).then((res)=>{
 //   console.log(res);
 // })
 db.collection("Users").findOneAndUpdate({
   _id:new ObjectID("5bd46126e962c03230564df0")
 },{
   $set:{
     name:"Prajjwal"
   },
   $inc:{
     age:1
   }
 },{
   returnOriginal:false
 }).then((res)=>{
   console.log(res);
 },(err)=>{
   console.log(err);
 })
})
