const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
    // console.log('Hello')
  
  const categories = await Category.findAll({
    include:
    [Product]
  })
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    // console.log('Hello')

  const byID = await Category.findOne({
    where: {
      id: req.params.id
    },
    include:
    [Product]
  })
res.json(byID);

});

router.post('/', async (req, res) => {
  // create a new category
    // console.log('Hello')
  const createNewCategory = await Category.create({
    category_name: req.body.category_name
  })
res.json(createNewCategory);

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
    // console.log('Hello')
  const categoryUpdate = await Category.update(req.body, {
    where:{
      id: req.params.id
    }
  })
res.json(categoryUpdate);

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    // console.log('Hello')
    const categoryDelete = await Category.destroy({
      where:{
        id: req.params.id
      }
    })
res.json(categoryDelete);

});

module.exports = router;
