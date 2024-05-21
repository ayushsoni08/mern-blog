import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => { 
        console.log('db connected'); 
    })
    .catch(err => {
        console.log(err);
    })

const app = express();

app.listen(8800, ()=>{
    console.log('server running on 8800');
})