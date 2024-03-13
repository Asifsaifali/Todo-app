const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed: {type: Boolean , default: false}
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo