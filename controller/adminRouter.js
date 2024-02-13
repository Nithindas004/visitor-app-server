const express = require("express")
const securityModel = require("../models/securityModel")
const bcrypt = require("bcryptjs")
const addAppointmentModel= require("../models/addAppointmentModel")


const router= express.Router()

hashPasswordGenerate = async(pass)=>{
    const salt= await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addsecurity",async(req,res)=>{
    let {data} = {"data":req.body}
    let pass=data.secpass
    hashPasswordGenerate(pass).then(
        (hashedpassword)=>{
            data.secpass= hashedpassword
            let security= new securityModel(data)
            let result= security.save()
            res.json(
                {
                    status:"success"
                }
            )
        }
    )
})

router.get("/viewsec",async(req,res)=>{
    let data= await securityModel.find()
    res.json(data)
})

router.get("/viewapp",async(req,res)=>{
    let result=await addAppointmentModel.find()
    .populate("secid","secname secphone -_id")
    .exec()
    res.json(result)
})


module.exports=router