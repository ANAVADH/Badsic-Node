const EventEmitter = require('events')




const CostomEvents = new EventEmitter()
 
CostomEvents.on('responce', (name , id)=>{
    console.log(`its an learning events the name is ${name} and age is ${id} `)
})
CostomEvents.on('responce', ()=>{
    console.log('its an learning events')
})
CostomEvents.on('responce', ()=>{
    console.log('its an learning events')
})
CostomEvents.on('responce', ()=>{
    console.log('its an learning events') 
})
CostomEvents.on('responce', ()=>{
    console.log('its an learning events')
})
CostomEvents.on('responce', ()=>{
    console.log('its an learning events')
})


CostomEvents.on('responce', ()=>{
    console.log('its an learning events') 
})

CostomEvents.emit('responce', "dibin", 54)
