const {readFile ,writeFile }= require('fs');
 readFile("./content/first.txt","utf-8",(err , result)=>{
     if(err){
        
         return;
     }
     const first = result ;
     readFile("./content/second.txt","utf-8",(err,result) =>{
         if(err){
            
             return;
         }
         const second =result ;
         writeFile('./content/third.txt',`here the result of first and the second : ${first} & ${second}` ,(err,result) =>{
             if(err){
                 console.log(err);
                 return;
             }
             console.log(result);
             can be 
    
             
        
         })
     })
    })