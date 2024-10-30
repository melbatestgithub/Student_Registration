const Student=require("../models/Student")

exports.registerStudent=async(req,res)=>{
    try {
        const newStudent= new Student(req.body);
        await newStudent.save();
        res.status(201).send({
            msg:"Student Registered Successfully",
            newStudent
        })
    } catch (error) {
        res.status(500).send({
            msg:"Errorn is Occured",
            error
        })
        
    }
}

exports.getRegisteredStud=async(req,res)=>{
    try {
        const allStudent=await Student.find();
        res.status(200).send(allStudent)
    } catch (error) {
        res.status(500).send({
            msg:"Error is Occured in fetching Students",
            error
        })
    }
}
exports.deleteStud=async(req,res)=>{
    const id=req.params.id
    try {
        await Student.findOneAndDelete(id);
        res.status(200).send("Student is deleted Successfully")
        
    } catch (error) {
        res.status(500).send("Error is occured in deleting Student");
    }
}
exports.updateStud=async(req,res)=>{
    const id=req.params.id
    const studentData=req.body
    try {
        const student=await Student.findById(id);
        if(!student){
            return res.status(404).send("Student is not found")
        }
     const updatedStudent=await Student.findByIdAndUpdate(id,studentData,{new: true})
     return res.status(200).send({
        msg:"Student is Updated Successfully",
        updatedStudent
     })
        
    } catch (error) {
        res.status(500).send({
            msg:"Error is occured in updating Student",
            error
        })
    }
}
