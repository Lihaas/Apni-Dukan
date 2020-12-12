const mongoose = require('mongoose')
const product = require('./product')


const dukan_schema = new mongoose.Schema({
    
    phoneNo:{
        type:Number,
        unique:true
    },
    nameOfShop:{
        type:String,
        required:true
    },
    ownerName:{
        type: String
    },
    address:{
        type:String
    }
    
},

{
    timestamps:true
})

dukan_schema.virtual('product', {
    ref: product,
    localField: '_id',
    foreignField: 'dukan_id'
})



const Dukan = mongoose.model('dukan',dukan_schema)



module.exports = Dukan