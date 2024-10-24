const express=require("express")
const router= express.Router()

const mainController=require("../controllers/maincontroller")

router.post("/",mainController.getForm)
module.exports=router