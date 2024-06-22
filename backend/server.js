require('dotenv').config();
const express=require('express');
const app = express();
const path = require('path');
// const handel=require('./middlewares/errorHandel');
const mongoDb=require('./config/db');
const userRoutes = require('./Routes/userRoutes');
const paymentRoutes = require('./Routes/paymentRoutes'); 
const financeRoutes = require('./Routes/financeRoutes');
const complaintRoutes = require('./Routes/complaintRoutes');

var cors = require('cors')

app.use(cors()) 
app.use(express.json());
mongoDb();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("API is working");
})
app.use('/api/user',userRoutes);
app.use('/api/payment',paymentRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/complaint', complaintRoutes);
// app.use();
const port = process.env.PORT||5000;
console.log(port);
const server=app.listen(port,(req,res)=>{
    console.log("server running in the port");
})

