const express= require("express")
const securityModel= require("../models/securityModel")
const bcrypt=require("bcryptjs")


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

module.exports=router
