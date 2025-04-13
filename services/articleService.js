const articleRepository = require('../repository/articleRepository');

exports.getArticles = ()=>{
    return articleRepository.getArticlesRepo();
};

exports.getArticleById = (id)=>{
    return articleRepository.getArticleByIdRepo(id);
};

exports.deleteArticleByIdServ = (id) => {
    return articleRepository.deleteArticleByIdRepo(id);
};

exports.postArticle = async(article) => {
    try {
        return articleRepository.postArticleRepo(article);
    } catch (error) {
        console.log(error);
    }
};

exports.updateArticle = (id, article)=>{
    return articleRepository.updateArticle(id, article);
};