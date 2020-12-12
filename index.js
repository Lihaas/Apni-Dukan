const express = require('express')
require('./db/mongoose')
const product = require('./routers/product')
const dukan = require('./routers/dukan')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(product)
app.use(dukan)


app.listen(port,()=>{

    console.log('Your server working on port ' + port);
    
})