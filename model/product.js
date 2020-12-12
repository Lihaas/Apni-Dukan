const mongoose = require('mongoose')


const product_schema = new mongoose.Schema({
    
    price:{
        type:Number
    },
    mrp:{
        type:Number
    },
    productName:{
        type: String
    },
    productCategory:{
        type:String
    },
    quantity:{
        type:Number
    },
    productDetail:{
        type: String
    },
    dukan_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'dukan'
    }

    
},

{
    timestamps:true
})




const product = mongoose.model('product',product_schema)



module.exports = product