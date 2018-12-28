const {MongoClient,ObjectID}=require("mongodb")
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err)
  return console.log("Unable to connect",err);
  console.log("Connected");
  db.collection("Users").find().count().then((count)=>{
    console.log(count);
  },(err)=>{
    console.log(err);
  })
  db.collection("Users").find({
    name:"Prajjwal"
  }).count().then((count)=>{
    console.log(count);
  },(err)=>{
    console.log(err);
  })
  db.collection("Users").find().toArray().then((arr)=>{
    console.log(JSON.stringify(arr,undefined,2));
  },(err)=>{
    console.log(err);
  })
  db.close()
})
