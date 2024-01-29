import express from "express"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import mongoose from "mongoose"

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
//when/if we will use CORS
// app.use(cors({
//     origin: 'http://localhost:5173',
// }));
app.use(cookieParser());

//////////////////////
//API ROUTES





//////////////////////
// Connect to MongoDB
mongoose.connect(MONGO_URI!);


// Check MongoDB connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
    console.log('connected to MongoDB 📝')
})