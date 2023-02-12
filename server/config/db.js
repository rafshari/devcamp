const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.skexl.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority` ,{
    useNewUrlParser: true,
    autoIndex: true
    // findOneAndUpdate:false
    // useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
