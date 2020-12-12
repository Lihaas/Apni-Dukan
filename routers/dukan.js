const express = require('express')
const Dukan = require('../model/dukan')
const router = new express.Router()



router.post('/dukan',async(req,res)=>{
    const dukanDetail = new Dukan(req.body)
try {
                await dukanDetail.save()
                return res.status(201).send(dukanDetail)
    } catch (error) {
        res.status(400).send(error)
    }



})

router.post('/login/dukan',async(req,res)=>{
            if(req.body.password == "12345678"){
try {
                dukanD = await Dukan.findOne({"phoneNo":req.body.phoneNumber})
                return res.status(200).send(dukanD)
    } catch (error) {
        res.status(400).send(error)
    }
}   else{
                return res.status(401).send({"Error":"Wrong Password"})
            }


})


module.exports = router