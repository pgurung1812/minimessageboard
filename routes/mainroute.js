const express=require("express")
const router= express.Router()

const mainController=require("../controllers/maincontroller")


router.get("/",mainController.getHome)
router.get("/new",mainController.fillForm)
router.get("/new/:user",mainController.getDetail)
router.post("/new",mainController.getForm)

module.exports=router