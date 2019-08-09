const express = require('express')
const EventController = require('./controllers/EventController')
const routes = express.Router()

routes.get('/', (req, res)=>{
    return res.json({ok:true})
})

routes.post('/events',EventController.store)


module.exports = routes

