import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => { 
        console.log('db connected'); 
    })
    .catch(err => {
        console.log(err);
    })

const app = express();

app.use('/api/user', userRoutes);

// test api
// app.get('/test', (req,res) => {
//     res.json({message: 'API is working!!'});
// })

app.listen(8800, ()=>{
    console.log('server running on 8800');
})