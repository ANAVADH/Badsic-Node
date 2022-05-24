const express = require('express')
const app = express()
const {products , people} = require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>Click the link below</h1><a href="/api/selected/">click</a><br><a href="/single/product/1">Single product</a>')
})
const newProduct = products.map((p)=>{
    const {name,image,price} = p
    return {name,image,price}
    })
app.get('/api/kk/query',(req,res)=>{
    let arr = products.map((p)=>{
         const{name} = p
         return {name}
    })
   let  SortedArray = [...arr]
    const {limit,search}= req.query;
 if(search){
        SortedArray = SortedArray.filter((p)=>{
            return p.name.startsWith(search)
         })
     }
if(limit){
        SortedArray = SortedArray.slice(0,Number(limit))
    }
if(SortedArray.length < 1){
// res.status(200).send('No such Products')
  return res.status(200).json({status: true, data: []})
    }
     // console.log(req.query);
res.status(200).json(SortedArray)
})

app.get('/api/selected/',(req,res)=>{
res.json(newProduct)
})
app.get('/single/product/:pid',(req,res)=>{
    // console.log(req.params);
    const{pid} = req.params;
    const Single = products.find((pro)=>
        pro.id === Number(pid)
    )
    if(!Single){
        return res.status(404).send('<h1>Product doesnot Exist</h1>')
    }
 return res.json(Single)
})
app.get('/api/selected/:first/middle/:second',(req ,res)=>{
    console.log(req.params);
    const {first , second} = req.params;
    res.send(`<h1>Hai </h1><br><ul><li>${first}</li><li>${second}</li></ul>`)
})
app.listen(5000,()=>{
    console.log("its port 500");
   })

