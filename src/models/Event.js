const {Schema, model} =  require('mongoose')

const EventSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String
    },
    dateTime:{
        type: Date
    },
    imageFeatured:{
        type: String
    }

}, {
    timestamps:true
})

module.exports = model(Event, EventSchema)