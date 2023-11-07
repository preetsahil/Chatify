const express = require("express")
const dotenv=require("dotenv")
const { chats } = require("./data/data")

const app=express()
dotenv.config({path:"./.env"})

app.get("/", (req,res)=>{
    res.send("API is running")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})
app.get("/api/chat/:id",(req,res)=>{
    const singleChat=chats.find((c)=> c._id===req.params.id)
    res.send(singleChat)

})
const port=process.env.PORT
app.listen(5000, console.log(`Server Started on PORT ${port}`))