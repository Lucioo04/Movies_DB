const db =  require('../database/models/index.js')

const genresController = {

    list: function(req,res) {
        db.Genre.findAll()
        .then (function(genres){
            res.render('genresList',{genres:genres})

        })

    },

}

module.exports = genresController;