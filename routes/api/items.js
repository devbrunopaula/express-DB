const express = require('express')
const router = express.Router();

//Item Model
const Item = require('../../models/Item')

// @route GET api/items
// @desc  Get all Items
// @acess Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});


// @route POST api/items
// @desc  Creatre a Post
// @acess Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});


// @route Delete api/items:id
// @desc  Delete a Post
// @acess Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({ sucess: true })))
        .catch(err => res.status(404).json('Id not Found'))
});
module.exports = router;