const express=require('express');
const app=express();
app.get('/',(req,res)=>{
res.send(('Helloo...')
)})

app.listen(3000,()=>{
    console.log("Start");
})

