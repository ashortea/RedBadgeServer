const router = require('express').Router();
const favGames = require('../db').import('../models/favGames.js');

const validateSession =require('../middleware/validate-session')


// GET ALL
router.get('/',validateSession, (req, res) => { 
    
    favGames.findAll()
        .then(favGame => res.status(200).json(favGame))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// POST
router.post('/', validateSession, (req, res) => {

    const favGamesFromRequest = {
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        publisher: req.body.publisher,
        rank: req.body.rank,
        comment: req.body.comment,
        owner: req.user.id
    }

    favGames.create(favGamesFromRequest)

        .catch(err => res.status(500).json({
            error: err
        }))

})

// UPDATE BY ID
router.put('/:id',validateSession, (req, res) => {
    favGames.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(favGame => res.status(200).json(favGame))
    .catch(err => res.json({
        error: err
    }))
})

// DELETE BY ID
router.delete('/:id',validateSession, (req, res) => {
    favGames.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(favGame => res.status(200).json(favGame))
    .catch(err => res.json({
        error: err
    }))
})




module.exports = router;