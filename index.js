const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req,res) => {
    res.send('welcome');
})


const port = process.env.port || 5000 ;
app.listen(port,()=>{
    console.log(`app is running on the port number : ${port}`);
})