const {MongoClient,ObjectID}=require("mongodb")
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err)
  return console.log("Unable to connect",err);
  console.log("Connected");
  // db.collection("Todos").deleteMany({
  //   text:"LUNCH"
  // }).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // })
  // db.collection("Todos").deleteOne ({
  //   text:"LUNCH"
  // }).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // })
  // db.close()
  // db.collection("Users").deleteMany({
  //   name:"Prajjwal"
  // }).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // })
  db.collection("Users").findOneAndDelete({
    _id:123
  }).then((res)=>{
    console.log(res);
  },(err)=>{
    console.log(err);
  })
})
