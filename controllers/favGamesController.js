const router = require('express').Router();
const favGames = require('../db').import('../models/favGames.js');

const validateSession =require('../middleware/validate-session')


// GET ALL
router.get('/',(req, res) => { 
    
    favGames.findAll()
        .then(favGame => res.status(200).json(favGame))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// POST
router.post('/',validateSession,(req, res) => {
console.log(req.body)
    const favGamesFromRequest = {  
        // id: req.body.id,
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        publisher: req.body.publisher,
        owner: req.user.id
    }

    favGames.create(favGamesFromRequest)

        .catch(err => res.status(500).json({
            error: err
        }))

})

// UPDATE BY ID
router.put('/:id',(req, res) => {
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
router.delete('/:id',(req, res) => {
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