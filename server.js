const express= require("express")
const app= express()
const PORT=3000

const mainRoutes=require("./routes/mainroute")
const newMessRoutes=require("./routes/newmessroute")

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", mainRoutes)
app.use("/new",newMessRoutes)

app.listen(PORT,()=>{
    console.log("server is running")
})