const {mongoose}=require('../server/db/mongoose')
const {Todo}=require('../server/models/todo')
const{ObjectID}=require('mongodb')


//First way
// Todo.remove({}).then((result)=>{
//   console.log(result);
// })

//Second way
// Todo.findByIdAndRemove("5c2f9a0d1f6125e53d977460").then((res)=>{
//   console.log(res);
// })


//Third way
Todo.findOneAndRemove({"do":"nothing"}).then((res)=>{
  console.log(res);
})
