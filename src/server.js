const express = require('express')
const server = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user-agenda-cidade:1245a328b7@cluster0-uvwpz.mongodb.net/dbagebda?retryWrites=true&w=majority', 
{useNewUrlParser:true}
)
server.use(express.json())
const routes = require('./routes')

server.listen(3333)
server.use(routes)