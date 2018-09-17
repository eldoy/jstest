const mongoose = require('mongoose')

var productVariationSchema = new mongoose.Schema({
    type: String,
    quantity: Number,
    price: Number
})

var productSchema = new mongoose.Schema({
    name: String,
    variations: [productVariationSchema]
})

var Product = mongoose.model('Product', productSchema)
var ProductVariation = mongoose.model('ProductVariation', productVariationSchema)

mongoose.connect('mongodb://localhost/mongoose')
var db = mongoose.connection
db.once('open', function() {
  const pv = new ProductVariation({ quantity: 0 })
  pv.save(function (err, doc) {
    console.log(doc._id)

    ProductVariation.find({ _id: mongoose.Types.ObjectId(doc._id) }, function (docs) {
      console.log('HELLO:', docs)
    })
  })


})
