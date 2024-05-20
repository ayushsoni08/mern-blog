import express from 'express';

const app = express();

app.listen(8800, ()=>{
    console.log('server running on 8800');
})