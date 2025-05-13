const express = require('express');
const articleController = require('../controllers/articleController');

const articleRouter = express.Router();

//Middleware
articleRouter.use(express.json());

articleRouter.get('/', articleController.readArticles);
articleRouter.get('/category/:category', articleController.readArticlesByCategory);
articleRouter.get('/:id', articleController.readArticleById);
articleRouter.post('/', articleController.createArticle);
articleRouter.put('/:id', articleController.updateArticle);
articleRouter.delete('/:id',articleController.deleteArticleById);

module.exports = articleRouter;