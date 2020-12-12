const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOA_DB_URL,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser: true,
    useFindAndModify: false  
})
