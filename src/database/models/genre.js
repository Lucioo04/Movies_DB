module.exports = (sequelize,dataTypes) => {

    const alias = "Generos";
    const cols ={
        id:{
            type:dataTypes.INTEGER,
            allownull:false,
            primaryKey:true,
            autoIncrement:true,
            unsigne:true
        },
        name:{
            type:dataTypes.STRING(100),
            allownull:false
        },
        ranking:{
            type:dataTypes.INTEGER,
            allownull:false,
            unsigne:true

        },
        active:{
            type:dataTypes.TINYINT(1),
            allownull:false
        }
    
    };
    const config={
        tableName: "genres",
        timestamps: false
        
    };
const genres = sequelize.define(alias,cols,config);
return genres
}