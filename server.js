const express = require('express')
const app = express()
const logger = require('morgan')
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require('cors')
const instrumentsController = require('./controllers/instruments')



const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL 

mongoose.connect(DATABASE_URL)

const db = mongoose.connection

db.on("error", (err) => console.log("He's gonna eat the goat?"))
db.on("connected", () => console.log("They DO move in herds"))
db.on("disconnected", () => console.log("I've decided not to endorse your park"))

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))
app.use(logger('dev'))
app.use(express.json());
app.use(cors())


app.use("/instruments", instrumentsController)




app.listen(PORT, () => console.log("Life uh uh uh finds a way"));