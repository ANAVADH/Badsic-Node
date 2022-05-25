const express = require('express')
const app = express()
const logger = require('./toggle')
const morgan = require('morgan')
// req => middleware =>res
app.use(morgan('tiny'))

app.get('/',(req,res)=>{

res.send('home')
})

app.get('/about',(req,res)=>{
res.send('About') 
})
app.listen(5000,()=>{
console.log('port is running ')
    
})
