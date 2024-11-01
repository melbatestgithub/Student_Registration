const express=require('express')
const app=express()
const cors=require('cors')
const ConnectionString=require("./config/Db")
const port=8000;
const studentRouter=require('./routers/Student')

app.use(express.json())
app.use(cors())
app.use("/students",studentRouter)

const startServer=async()=>{
  try {
    ConnectionString()
    app.listen(port,()=>{
        console.log(`Server is running on the port ${port}`)
    })
  } catch (error) {
    console.log("Unable to run the server")
  }
}
startServer() 