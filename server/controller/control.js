const Product = require('./../models/Product.js');
let errorHandler = require('./helpers/error-handler');


module.exports = {
    view: function(req,res){
        Product.find()
            .then(data => res.json(data))
            .catch(errorHandler.bind(res))
    },
    viewid: function(req,res){
        Product.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(errorHandler.bind(res))
    },
    create: function(req,res){
        const product1 = new Product;
        product1.name = req.body.name
        product1.qty = req.body.qty
        product1.price = req.body.price
        product1.save()
            .then(data => res.json(data))
            .catch(errorHandler.bind(res))
    },
    remove: function(req,res){
        Product.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(errorHandler.bind(res))
    },
    update: function(req,res){
        Product.updateOne({_id: req.params.id},{
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price
        })
            .then(data => res.json(data))
            .catch(errorHandler.bind(res))
    }
}