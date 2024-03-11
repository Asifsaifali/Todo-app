const express = requrie('express')
const bodyParser = require('body-parser')
const app = express()
const {  createTodo, updateTodo} = require('./types')

app.use(bodyParser.json())

app.post('/todo',(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong data"
        });
    }else{
        return res.status(200).json({
            msg : "Successfully created todo",
            id: parsedPayload.data.id,
            success  : true
        })
    }
    
})

app.get('/',(req,res)={

})


const PORT = 8000
const Server = ()=>{
    app.listen(8000, ()=>{
        console.log("Server is running on PORT",PORT);
    })
}
