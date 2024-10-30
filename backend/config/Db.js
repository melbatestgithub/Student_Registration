const mongoose=require('mongoose')
const dontenv=require('dotenv')
dontenv.config()
const DatabaseConnection=async(req,res)=>{
    try {
         mongoose.connect(process.env.MONGO_URI)
         console.log("Connected to Mongo DB")
    } catch (error) {
         console.log("Error is Occured in Connecting to Mongo DB") 
    }
}
module.exports=DatabaseConnection