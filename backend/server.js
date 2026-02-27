/*
mongoose: Help us to connect with the database
jsonwebtoken: Use to create authentication system
bcrypt: It will encrypt users data and store in the database
cors: Using this we can give the permission to our frontend to connect with the backend
dotenv: Using this we can use the environment variable in our project
body-parser: Using this we will parse the data coming through user
multer: Use to create image store system
stripe: Use to add payment gateways on the web page
validator: Using this we will check the password or email-id is valid or not 
nodemon: Using this when we save our project the server will be restarted
*/

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res)=>{
  res.send("API Working")
})
app.listen(port, ()=>{
  console.log(`Server Started on http://localhost:${port}`)
})

