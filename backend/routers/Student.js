const router=require("express").Router()
const StudentCtrl=require("../controllers/Student")
router.post("/registerStudent",StudentCtrl.registerStudent)
router.get("/getAllStudent",StudentCtrl.getRegisteredStud)
router.delete("/delete/:id",StudentCtrl.deleteStud)
router.put("/update/:id",StudentCtrl.updateStud)



module.exports=router