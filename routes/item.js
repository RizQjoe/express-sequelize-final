const express = require ('express')
const router = express.Router()
const Model = require('../models')




router.get('/', function(req, res){
  Model.item.findAll()
  .then(function(items){
    res.render('item',{dataItem: item})
  })
})



/*                    add              */
router.get('/items/add', function (req, res){
  res.render('addItems', {err: false})
})

router.post('items/add', function (req, res){
  Model.item.create({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.brand,
    listSupplier: req.body.listSupplier
  })
})

/*                  edit                 */
router.get('/items/edit/:id', function (req, res){
  Model.item.findAll({
    where:{
      id: req.params.id
    }
  })
  .then(data =>{
    res.render('itemsEdit'{data:data})
  })
})

router.post('items/edit/id', (req, res)=>{
  Model.item.update({
    name: req.body.name,
    brand: req.body.brand,
    codeItem: req.body.codeItem
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/items')
  })
  .catch((data)=>{
    res.redirect('/items')
  })
})




module.exports = router
