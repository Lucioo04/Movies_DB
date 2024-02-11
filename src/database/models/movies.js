module.exports = (sequelize,DataTypes) => {

    const alias = "Peliculas";
    const cols ={
        id:{
            type:DataTypes.INTEGER,
            allownull:false,
            primaryKey:true,
            autoIncrement:true,
            unsigne:true
        },
        title:{
            type:DataTypes.STRING(500),
            allownull:false
        },
        rating:{
            type:DataTypes.DECIMAL(3.1),
            allownull:false,
            unsigne:true
        },
        awards:{
            type:DataTypes.INTEGER,
            allownull:false,
            unsigne:true
        },
        release_date:{
            type:DataTypes.DATE,
            allownull:true
        },
        length: {
            type:DataTypes.INTEGER,
            unsigne:true
        },
        genre_id: {
            type: DataTypes.INTEGER,
            unsigne:true
        },
       
    };
    const config={
        tableName: "movies",
        timestamps: false
    };
const movies = sequelize.define(alias,cols,config);
return movies
}