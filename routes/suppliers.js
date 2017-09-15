const express = require ('express')
const router = express.Router()
const Model = require('../models')


router.get('/', function (req, res){
  Model.Supplier.findAll()
  .then(function(supplier){
    res.render('supplier',{dataSuplier:supplier})
  })
})


/*                      add                 */

router.get('suppliers/add',function(req, res){
  res.render('addSupplier', {err: false})
})

router.post('suppliers/add', function(req, res){
  Model.Supplier.create({
    name: req.body.name,
    kota: req.body.kota
  })
})


/*              >> edit  <<          */

router.get('suppliers/edit/:id', function (req, res){
  Model.Supplier.findAll({
    where:{
      id: req.params.id
    }
  })
  .then(data =>{
    res.render('supplierEdit',{data:data})
  })
})


router.post('suppliers/edit/:id', (req, res)=>{
  Model.Supplier.update({
    name: req.body.name,
    kota: req.body.price
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/supplier')
  })
  .catch((data)=>{
    res.redirect('/supplier')
  })
})


/*                Delete                  */

router.get('suppliers/delete/:id', function(req, res){
  Model.Supplier.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/supplier')
  })
})


module.exports = router
