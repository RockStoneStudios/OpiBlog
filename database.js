const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.DB,{
   useNewUrlParser : true,
   useUnifiedTopology : true
}).then(()=>{
    console.log('Database Conected Sucessfull')
}).catch(error =>{
    console.log(error);
});

