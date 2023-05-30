const express = require('express')
const path = require('path')

const app = express()

app.listen(3000 , () =>{{
    console.log('server is running')
}})

app.get('/',(req , res) =>{
    res.sendFile(path.resolve(__dirname,'./new.txt'))

})
app.get('/about',(req , res) =>{
    res.send('<h1>this is about</h1>')

})


app.all('*',(req , res) =>{
  res.status(404).send('This page is not working')  
})