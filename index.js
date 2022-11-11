const express = require('express')
const app = express()
const path = require('path')
//app.use(express.static(path.join(__dirname, '/public')))
//app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

app.get('/produtos', (req,res)=>{
    res.sendFile(path.join(__dirname + "/views/produtos.html"))  // vai morar pasta views 
})

app.listen(3000, ()=> console.log("listening on"))