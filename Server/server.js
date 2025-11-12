require('dotenv').config();
const express=require("express")
const connectToDB =require("./database/db")

// connection to DataBase
connectToDB();

const app=express();
const PORT=process.env.PORT || 3000;

// Global middlewares 
app.use(express.json());



// routes here 



app.listen(PORT, ()=>{
    console.log(`Server is now listening to port ${PORT}`);
})

