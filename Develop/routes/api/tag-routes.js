const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  //console.log('Hello');
const findAllTags = await Tag.findAll({
  include: [{model: Product, through: ProductTag}]
})
res.json(findAllTags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  //console.log('Hello');

  const findOneTag = await Tag.findOne({
    where:{
      id: req.params.id
    },
    include: [{model: Product, through: ProductTag}]
  })
  res.json(findOneTag);
});

router.post('/', async (req, res) => {
  // create a new tag
  //console.log('Hello');
  const createNewTag = await Tag.create({
    tag_name: req.params.tag_name
  })
res.json(createNewTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  //console.log('Hello');
  
  const updateTagName = await Tag.update(req.body, {
    where: {
      id:req.params.id
    }
  })
res.json(updateTagName);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  //console.log('Hello');
  
  const deleteTagByID = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
res.json(deleteTagByID);
});

module.exports = router;
