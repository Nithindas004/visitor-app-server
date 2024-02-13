const express = require("express")
const securityModel = require("../models/securityModel")
const bcrypt = require("bcryptjs")

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


module.exports=router