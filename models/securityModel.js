const mongoose = require("mongoose")

const securitySchema= new mongoose.Schema(
    {
        secname:{
            type:String,
            required:true
        },
        secphone:{
            type:String,
            required:true
        },
        secaddr:{
            type:String,
            required:true
        },
        secpass:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("security",securitySchema)