import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import route from './Routes/Routes.js'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()

app.use(cors())
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


dotenv.config()


const Port = process.env.PORT
const Url = process.env.MONGO_URI

mongoose.connect(Url).then(() => {
    console.log('Connected to MongoDB')
    app.listen(Port, () => {
        console.log(`Server is running on port ${Port}`)
    })
})


const uploadDir = path.join(__dirname, 'uploads', 'profilePhotos');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}


app.use('/api', route)