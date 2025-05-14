const articleService = require('../services/articleService');

exports.readArticles = async (req, res)=>{
    try{
        const articles = await articleService.getArticles();
        res.status(200).send(articles);
    }catch(error){
        console.log(error)
        res.status(500).send("Error al conseguir articulos.");
    }    
};


exports.readArticleById = async (req, res)=>{
    try{
        const article = await articleService.getArticleById(req.params.id);
        if(article){
            res.status(200).send(article);
        }else{
            res.status(404).send("Error al encontrar articulo con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al encontrar articulo.");
    }
};

exports.readArticlesByCategory = async (req, res)=>{
    try{
        const articles = await articleService.getArticlesByCategory(req.params.category);
        if(articles){
            res.status(200).send(articles);
        }else{
            res.status(404).send("Error al encontrar articulos de la categoria: "+req.params.category)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al encontrar articulos.");
    }
}



exports.deleteArticleById = async (req, res) => {
    try {
       let borrar = await articleService.deleteArticleByIdServ(req.params.id);

       if(borrar){
        return res.status(200).json("El articulo se eliminó con éxito");
       }else{
        return res.status(400).json(`Controller: Articulo n°: ${req.params.id} no existe`);
       }
       
    } catch (error) {
        console.log(error)
        res.status(500).send(`Controller: Error al eliminar la articulo id: ${req.params.id}`);
    }
};

exports.createArticle = async(req, res) => {
    try {
        const article = await articleService.postArticle(req.body)
        res.status(201).send(article);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al crear la articulo.")

    }
};

exports.updateArticle = async (req, res)=>{
    try{
        const article = await articleService.updateArticle(req.params.id, req.body);
        if(article){
            res.status(200).send(req.body);
        }else{
            res.status(404).send("Error al actualizar articulo con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al actualizar articulo.");    
    }
};