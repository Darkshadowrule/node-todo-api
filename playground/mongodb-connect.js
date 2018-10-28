const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  return console.log("Unable to connect");
  console.log("Connected",db);
 //  db.collection('Todos').insertOne({
 //   text:'Darkshadow',
 //   completed:false
 // },(err,result)=>{
 //    if(err)
 //    return console.log("Unable to insert",err);
 //    console.log(JSON.stringify(result.ops,undefined,2));
 //  })
 // db.collection('Users').insertOne({
 //   name:"Prajjwal",
 //   age:20,
 //   college:"Arya"
 // },(err,result)=>{
 //   if(err)
 //   return console.log("Unable to insert",err);
 //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
 // })
  db.close();
})
