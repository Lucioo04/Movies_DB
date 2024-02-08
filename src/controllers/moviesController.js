const db =  require('../database/models/index.js')

const moviesController = {

    list: function(req,res) {
        db.Peliculas.findAll()
            .then (function(movies){
                res.render('moviesList',{movies:movies})

        });

    },
    detail: function (req,res) {
        db.Peliculas.findByPk(req.params.id)  
            .then (function (movie) {
                res.render ('moviesDetail',{movie:movie})
            });

    },
    new: function(req, res) {
        db.Peliculas.findAll({
            order: [
                ['release_date', 'desc']
            ]
        })
        .then(function(movies){
            res.render('newestMovies', {movies: movies});
        });
    }, 
    recomended : function (req,res) {
        db.Peliculas.findAll ( {
            order: [
                ['rating', 'desc']
            ],
            limit : 5
        })
        .then(function(movies){
            res.render('recommendedMovies', {movies: movies});
        });
    }
}
module.exports = moviesController;