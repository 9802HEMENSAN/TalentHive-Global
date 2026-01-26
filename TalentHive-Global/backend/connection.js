const mongoose = require('mongoose');

//  TalentHive-Global

mongoose.connect('mongodb://localhost:27017/').then(res=>{
    console.log("Database Successfully connected")
}).catch(err=>{
    console.log(err)
})



 