const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const app = express();
app.use(express.json());

//load env
dotenv.config({ path: './config/config.env' });
//connect to database
connectDB();

//route files
const bootcamps = require('./routes/bootcamps');
const errorHandler = require('./middleware/error');

if (process.env.NODE_ENV === 'development') {
 app.use(morgan('tiny'));
}
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);

const server = app.listen(
 PORT,
 console.log(
  `Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`.white.bold
 )
);

// handle unhandeled promises rejections

process.on('unhandeledRejection', (err, promise) => {
 console.log(`Error : ${err.message}`.red);
 //close server & exit process
 server.close(() => process.exit(1));
});