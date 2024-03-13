const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {  createTodo, updateTodo} = require('./types')
const Todo = require('./databases')
const connection = require("./connection")
app.use(bodyParser.json())

app.post('/todo',async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong data"
        });
    }else{
        const data = await Todo.create(req.body)
        return res.status(200).json({
            msg : "Successfully created todo",
            id: parsedPayload.data.id,
            data : data,
            success  : true
        })
    }
    
})

app.get('/',(req,res)=>{

})

app.patch('/update/:id',(req,res)=>{
    const parsedPay = req.body
    const UpdatedPayload = updateTodo.safeParse(parsedPay)
    if(!UpdatedPayload.success){
        res.status(411).json({
            msg : "Invalid payload",
            success : false,

        })
    }
})


const PORT = 8000
const Server = ()=>{
    app.listen(8000, async()=>{
        console.log("Server is running on PORT",PORT);
        await connection()
    })
}

Server()