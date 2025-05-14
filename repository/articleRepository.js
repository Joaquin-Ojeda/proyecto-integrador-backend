const Articles = require('./Articles');
const conectarDB = require('../db/db');

//conexion a la DB
conectarDB();

exports.getArticlesRepo = async ()=>{
    try{
        let articles = await Articles.find();
        return articles;
    }catch(error){
        console.log(error);
    }
};


exports.getArticleByIdRepo = async (id)=>{
    try{
        let article = await Articles.findById(id);
        return article;
    }catch(error){
        console.log(error);
    }
};

exports.getArticlesByCategoryRepo = async (category)=>{
    try{
        let articles = await Articles.find({ categoria: { $regex: new RegExp(`^${category}$`, 'i') } });
        return articles;
    }catch(error){
        console.log(error);
    }
}

exports.deleteArticleByIdRepo = async (id) => {
    try{
        let article = await Articles.findById(id);
        
        if(!article){
            return console.log(`Repository: No existe el id: ${id}`)
        }else{
            console.log(`Repository: Se eliminó el articulo con id: ${id}`)
            return await Articles.findByIdAndDelete({_id:id})
        }
        
    }catch(error){
        return console.log(error);
    }
};

exports.postArticleRepo = async (articleData) => {
    try {
        let newArticle = new Articles(articleData); // Articles es el modelo importado
        await newArticle.save();
        return newArticle;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


exports.updateArticle = async (id, article)=>{
    try{
        let identifier = {_id: id};
        let body = {
            titulo: article.titulo,
            subTitulo: article.subTitulo,
            descripcion: article.descripcion,
            imagen: article.imagen,
            fecha: article.fecha,
            categoria: article.categoria
        };

        let tareaNueva = await Articles.updateOne(identifier, body, {new: true});
        return tareaNueva;
    }catch(error){
        console.log(error);
    }
};