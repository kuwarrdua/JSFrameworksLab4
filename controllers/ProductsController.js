const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  const product = Product.findById(req.params.id);
  res.render(`${viewPath}/show`, {
    pageTitle: product.title,
    productName: product.name,
    productDescription: product.description,
    productPrice: product.price

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
  res.redirect(`/products/${product.id}`);
  console.log(req.body);
  } catch (err) {
    console.error(err);
  }
};