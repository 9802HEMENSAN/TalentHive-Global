const mongoose = require('mongoose');


// linkedInClone

mongoose.connect('mongodb://localhost:27017/linkedInClone').then(res=>{
    console.log("Database Successfully connected")
}).catch(err=>{
    console.log(err)
})



 