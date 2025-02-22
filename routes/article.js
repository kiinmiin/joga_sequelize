const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.get('/', articleController.getAllArticles);
router.get('/author/:id', articleController.getArticlesByAuthorId);
router.get('/article/:slug', articleController.getArticleBySlug);

module.exports = router;
