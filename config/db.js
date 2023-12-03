const mongoose = require('mongoose');

const connectDb = async () => {
 try {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
 } catch (error) {
  console.error(`Error connecting to MongoDB: ${error}`);
 }
};

module.exports = connectDb;
