const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', async(req, res) => {
    const movies = await movieService.getAll().lean();

    res.render('home', { movies })
});

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/404', (req, res) => {  
    res.render('404')
})

router.get('/search', async(req, res) => {
    const { title, genre, year } = req.query;
    const moviesFound = await movieService.search(title, genre, year).lean();
    //const movies = movieService.getAll();

    res.render('search', {movies: moviesFound})
})

module.exports = router;