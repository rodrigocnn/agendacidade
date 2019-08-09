const Event = require("./models/Event")

module.exports = {
    async store(req, res){
        const { description, address , contact, dateTime,  imageFeatured} = req.body
        await Event.create({description, address , contact, dateTime,  imageFeatured})
        return res.json({ok:req.body})
    }
}