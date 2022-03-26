const {Schema,model} = require('mongoose');


const PostSchema = new Schema({
   title :{
       type : String,
       required : true,
       unique : true
   },
   desc:{
       type : String,
       required : true
   },
   photo :{
        type : String,
        required : true
   },
   categories : {
       type : Array,
       required : false
   },
    username:{
        type : String,
        required : true
    }
},{
    timestamps : true
});



module.exports = model("Post",PostSchema);