const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  department:{
  type:String,
  required:true
  },
  phoneNumber:{
    type:String,
    required:true
  },
  course:{
    type:[String]
  },
  age:{
    type:Number,
    required:true
  },
  address:{
    type:String,
   
  }

})
const Student=mongoose.model("Students",studentSchema)
module.exports=Student