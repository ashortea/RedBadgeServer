const router = require('express').Router();
const Games = require('../db').import('../models/games.js');
const validateSession = require('../middleware/validate-session')

// GET ALL
router.get('/', (req, res) => {

    Games.findAll()
        .then(game => res.status(200).json(game))
        .catch(err => res.status(500).json({
            error: err
        }))
})



// POST
router.post('/',(req, res) => {
    console.log(req.body)
    // const newGame = req.body;

    const gamesFromRequest = {
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        publisher: req.body.publisher
    }

    Games.create(gamesFromRequest)
        .then(game => res.status(200).json(game))
        .catch(err => console.log(err));

})



// UPDATE BY ID
router.put('/:id',(req, res) => {
    Games.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(game => res.status(200).json(game))
        .catch(err => res.json({
            error: err
        }))
})

// DELETE BY ID
router.delete('/:id', (req, res) => {
    Games.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(game => res.status(200).json(game))
        .catch(err => res.json({
            error: err
        }))
})


module.exports = router;