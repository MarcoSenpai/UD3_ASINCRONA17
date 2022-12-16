const express = require('express');
const productSchema = require('../models/productos');

const router = express.Router();

//crear producto
router.post('/PRODUCTOS',(req,res)=>{
    const product = productSchema(req.body);
    product
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})


//obtener productos
router.get('/PRODUCTOS',(req,res)=>{
    productSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

//obtener un usuario
router.get('/PRODUCTOS/:id',(req,res)=>{
    const {id} = req.params;
    productSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

//actualizr un usuario
router.put('/PRODUCTOS/:id',(req,res)=>{
    const {id} = req.params;
    const {SKU,QTY,NAME,PRICE} = req.body;

    productSchema
    .updateOne({_id:id},{$set:{SKU,QTY,NAME,PRICE}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

//eliminar un usuario
router.delete('/PRODUCTOS/:id',(req,res)=>{
    const {id} = req.params;
    productSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

module.exports = router;