const Product = require('./../controller/control.js');

module.exports = function(app){
    app.get('/products', function(req,res){
        Product.view(req,res)
    })
    app.get('/products/:id', function(req,res){
        Product.viewid(req,res)
    })
    app.post('/products/new', function(req,res){
        Product.create(req,res)
    })
    app.delete('/products/delete/:id', function(req,res){
        Product.remove(req,res)
    })
    app.put('/products/edit/:id', function(req,res){
        Product.update(req,res)
    })
}