import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import route from './Routes/Routes.js'

const app = express()

app.use(cors())
app.use(express.json());

dotenv.config()


const Port = process.env.PORT
const Url = process.env.MONGO_URI

mongoose.connect(Url).then(() => {
    console.log('Connected to MongoDB')
    app.listen(Port, () => {
        console.log(`Server is running on port ${Port}`)
    })
})

app.use('/api', route)