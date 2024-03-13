const mongoose = require("mongoose")

 const connection=async()=>{
    await mongoose.connect('mongodb://127.0.0.1/todo_app');
    console.log("Connection established to mongodb server")
}

module.exports = connection;

