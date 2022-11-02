'use strict';
// catController
const {cats, getCat} = require('../models/catModel');

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const cat = getCat(req.params.id);
  console.log('kissa', cat);
  res.json(cat);
};

const cat_post = (reg, res) =>{
  console.log('cat_post', reg.body, reg.file);
  res.send('Cat post done.');
}

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
};