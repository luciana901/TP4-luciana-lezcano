const express=require('express');
const cors=require('cors');
const helmet=require('helmet');
const morgan=require('morgan');
require('dotenv').config();
const port=process.env.port;
const app=express();

// Middlewares //
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/',require('./routes/app.routes'));


app.listen(port||3000,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})