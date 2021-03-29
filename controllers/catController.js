'use strict';

const catModel = require('../models/catModel');


// const cat_list_get = (req, res) => {
//   console.log('get all cats from controllers', req.query);
//   if (req.query.sort === 'age') {
//     const catsSort = cats.slice().sort((catA, catB) => catA.age - catB.age);
//     res.json(catsSort);
//     return;
//   }
//   res.json(cats);
// };

const cat_get_by_id = async (req, res) => {
  const cat = await catModel.getCat(req.params.id);
  res.json(cat);
};

const cat_post_new_cat = (req, res) => {
  console.log('post cat', req.body)
}

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_post_new_cat,
};
