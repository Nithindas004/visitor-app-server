const express=require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const adminRoute = require("./controller/adminRouter")
const securityRoute = require("./controller/securityRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nithindas1234:1234nith@cluster0.lvn9hia.mongodb.net/visitorDb?retryWrites=true&w=majority",
{useNewUrlParser: true})

app.use("/api/admin",adminRoute)
app.use("/api/security",securityRoute)

app.listen(3001,()=>{
    console.log("server running....")
})