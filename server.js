
import express  from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db_config.js";



//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

//port
const PORT = process.env.PORT || 8040;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      
  );
});

//MIDLLEWARES
// Middleware to parse JSON and cookies
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(cookieParser()); // To parse cookies
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());



// Define the root route
app.get('/', (req, res) => {
  res.send('Hello from backend of Apnachat-Mern');
});
