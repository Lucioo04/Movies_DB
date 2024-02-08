const db =  require('../database/models/index.js')

const genresController = {

    list: function(req,res) {
        db.Generos.findAll()
        .then (function(genres){
            res.render('genresList',{genres:genres})

        })

    },
    detail: function (req,res) {
        db.Generos.findByPk(req.params.id)  
            .then (function (genero) {
                res.render ('genresDetail',{genre:genero})
            })

}

}
module.exports = genresController;