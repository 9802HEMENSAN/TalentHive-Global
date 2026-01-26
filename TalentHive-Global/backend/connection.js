const mongoose = require('mongoose');
require('dotenv').config();
//  TalentHive-Global

mongoose.connect(process.env.MONGODB_URL).then(res=>{
    console.log("Database Successfully connected")
    // console.log(process.env.MONGODB_URL);

}).catch(err=>{
    console.log("Database connection failed");
    console.log(err)
})

// 'mongodb://localhost:27017/'

 