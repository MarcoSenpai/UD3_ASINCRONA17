const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const productRoutes = require('./routes/productos');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');
//middleware
app.use(express.json());//Para usar json en el request.http
app.use(cors());
app.use('/API', productRoutes);


//routes
app.get('/',(req,res)=>{
    res.send('Welcome to Racoon City')
})


//mongo db connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Connected to MongoDBAtlas'))
.catch((error)=>console.error(error))

app.listen(port,()=>console.log('server listening on port',port))