const {mongoose}=require('../server/db/mongoose')
const {User}=require('../server/models/user')
const{ObjectID}=require('mongodb')
var id="6bdf168cb7b447126cfcbe2a"
if(!ObjectID.isValid(id))
return console.log("Wrong id !!!");
User.findById(id).then((doc)=>{
  if(doc)
  console.log('Todo is',doc);
  else {
    console.log("User Not Found!!");
  }
}).catch((e)=>{
  console.log(e);
})
