const express = require('express')
const app = express()
let {people} = require('./data')
let {world} = require('')


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))



    app.get('/api/people',(req,res)=>{

    res.status(200).json({success:true, data : people })  
 })
    app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body
    if(name){
        return res.status(200).send(`<h1>welcome ${name}</h1>`)
        
    }
    return res.status(401).send('401 erro')
})
app.listen(5000,()=>{
    console.log('port 5000 is running');
})
