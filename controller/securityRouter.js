const express= require("express")
const securityModel= require("../models/securityModel")
const bcrypt=require("bcryptjs")
const addAppointmentModel= require("../models/addAppointmentModel")


const router=express.Router()

router.post("/seclogin",async(req,res)=>{
    let ename=req.body.secname
    let epass= req.body.secpass
    let data= await securityModel.findOne({"secname":ename})
    if(!data)
    {
        return res.json(
            {
                status:"Invalid user"
            }
        )
    }
    let dbpass=data.secpass
    const match=await bcrypt.compare(epass,dbpass)
    if(!match)
    {
        return res.json(
            {
                status:"incorrect password"
            }
        )
    }
    res.json(
        {
            status:"success","userdata":data
        }
    )
})

router.post("/addappointment",async(req,res)=>{
    let input = req.body
    let appointment=new addAppointmentModel(input)
    let result= await appointment.save()
    res.json(
        {
            status:"success"
        }
    )
})

module.exports=router
