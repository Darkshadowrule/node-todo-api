const express = require('express');
const bodyParser = require('body-parser');
const{ObjectID}=require('mongodb')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')


var app=express();
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  })
  todo.save().then((doc)=>{
    res.send(doc)
  },(e)=>{
    res.send(e);
  })
})
// app.post('/users',(req,res)=>{
//   var users=new User({
//     email:req.body.email
//   })
//   users.save().then((doc)=>{
//     res.send(doc)
//   },(e)=>{
//     res.send(e)
//   })
// })
app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{
    res.send({doc})
  },(e)=>{
    res.status(400).send(e);
  })
})
app.get("/todos/:id",(req,res)=>{
  var id=req.params.id
  if(!ObjectID.isValid(id))
  return res.status(404).send()
  Todo.findById(id).then((doc)=>{
    if(doc)
    res.send(doc)
    else {
      res.status(404).send()
    }
  }).catch((e)=>{
    res.status(404).send()
  })

})

app.listen(3000,()=>{
  console.log("Started on 3000");
})
