const mongoose= require("mongoose")

const appointmentSchema= new mongoose.Schema(
    {
        secid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"security"
        },
        name:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        purpose:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("appointments",appointmentSchema)