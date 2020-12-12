const express = require('express')
const product = require('../model/product')
const router = new express.Router()



router.post('/product',async(req,res)=>{
    const productCreate = new product(req.body)
try {
                await productCreate.save()
                return res.status(201).send(productCreate)
    } catch (error) {
        res.status(400).send(error)
    }



})

router.get('/product',async(req,res)=>{
            if(req.query.dukanID){
try {
                productD = await product.find({dukan_id:Object(req.query.dukanID)})
                return res.status(200).send(productD)
    } catch (error) {
        res.status(400).send(error)
    }
}   else{
                return res.status(400).send()
            }


})

router.get('/allproduct',async(req,res)=>{
   
try {
        productD = await product.find({})
        return res.status(200).send(productD)
} catch (error) {
res.status(400).send(error)
}
   

})



module.exports = router