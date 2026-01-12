const mongoose = require('mongoose');


// linkedInClone

mongoose.connect('mongodb://localhost:27017/linkedInClone').then(res=>{
    console.log("Database Successfully connected")
}).catch(err=>{
    console.log(err)
})



// uW4QXQcTbSd7u8Fy
// mongodb+srv://mashhooddanish:uW4QXQcTbSd7u8Fy@cluster0.nyy6imw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongoose.connect('mongodb+srv://mashhooddanish:uW4QXQcTbSd7u8Fy@cluster0.nyy6imw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(res=>{
//     console.log("Database Successfully connected")
// }).catch(err=>{
//     console.log(err)
// })