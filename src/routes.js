// const express = require('express');
// const router = express.Router();
const router = require('express').Router(); // the upper two could be synthesized into this one!!!

const home = require('./controllers/home'); 
router.use(home);                           

const create = require('./controllers/create');
router.use(create);

const cast = require('./controllers/cast');
router.use('/cast', cast);

const auth = require('./controllers/auth')
router.use(auth);

router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;