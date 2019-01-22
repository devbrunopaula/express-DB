const express = require('express')
const router = express.Router();

//Item Model
const Account = require('../../models/Account')

// @route GET api/accounts
// @desc  Get all Items
// @acess Public

router.get('/', (req, res) => {
    Account.find()
        .sort({ date: -1 })
        .then(accounts => res.json(accounts))
});


// @route POST api/accounts
// @desc  Creatre a Post
// @acess Public

router.post('/', (req, res) => {
    const newAccount = new Account({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    newAccount.save().then(account => res.json(account));
});

module.exports = router;