const express = require('express');
const bodyParser = require('body-parser');
const{ObjectID}=require('mongodb')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')

const port=process.env.PORT ||3000
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

app.listen(port,()=>{
  console.log(`Started up at port ${port}`);
})
