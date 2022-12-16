const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    SKU : {
        type:String,
        required:true
    },
    QTY : {
        type:Number,
        required:true
    },
    NAME : {
        type:String,
        required:true
    },
    PRICE : {
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('PRODUCTOS',productSchema);