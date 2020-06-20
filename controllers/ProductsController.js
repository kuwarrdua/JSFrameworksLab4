const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render(`${viewPath}/show`,{
    pageTitle: product.name,
    product: product
  });
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Title'
  });
};

exports.create = async (req, res) => {
  try{
    const product = await Product.create(req.body);
    console.log(req.body);
    res.redirect(`/products/${product.id}`);
  }
  catch(err){
    console.log(err);
  }
};