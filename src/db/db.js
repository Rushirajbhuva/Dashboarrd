const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/empform')
.then(()=>{
    console.log(`connnected`);
})
.catch((error)=>{
    console.log(error);
})