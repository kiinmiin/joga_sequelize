// get connection to database ORM object
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// read model data for table representation
const models = require('../models');

// get all data from table
const getAllArticles = (req, res) => {
    models.Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({articles});
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}  

// show article by this slug
const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [{
            model: models.Author,  
        }],  
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({article});
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}; 

const getArticlesByAuthorId = (req, res) => {
    console.log("Received request for author ID:", req.params.id); // Logging the author ID
    const authorId = req.params.id; 
    models.Author.findByPk(authorId, {
        include: [{
            model: models.Article,
        }]
    })
    .then(author => {
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        console.log("Author object:", author); // Logging the author 
        return res.status(200).json({ articles: author.Articles.map(article => article.dataValues) || [] }); 
    })
    .catch(error => {
        console.error("Error fetching articles by author ID:", error); // Logging the error 
        return res.status(500).send(error.message);
    });
}

// export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticlesByAuthorId
}
