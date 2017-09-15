const express = require ('express')
const router = express.Router()
const Model = require('../models')




router.get('/', function(req, res){
  Model.item.findAll()
  .then(function(items){
    res.render('item',{dataItem: item})
  })
})






module.exports = router
