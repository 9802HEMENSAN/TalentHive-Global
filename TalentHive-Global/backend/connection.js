const mongoose = require('mongoose');

//  TalentHive-Global

mongoose.connect(process.env.MONGODB_URL).then(res=>{
    console.log("Database Successfully connected")
}).catch(err=>{
    console.log(err)
})

// 'mongodb://localhost:27017/'

 