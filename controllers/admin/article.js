const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../../models');

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({message: 'New article is added'});
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
}

const updateArticle = (req, res) => {
    const id = req.params.id;

    const { name, slug, image, body, authorId } = req.body;
    models.Article.update(
        { name, slug, image, body, authorId },
        { where: { id } }
    )
    .then(() => {
        return res.status(200).json({ message: 'Article updated successfully' });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
}

const deleteArticle = (req, res) => {
    const id = req.params.id;

    models.Article.destroy({
        where: { id }
    })
    .then(deleted => {
        if (!deleted) {
            return res.status(404).json({ message: 'Article not found' });
        }
        return res.status(200).json({ message: 'Article deleted successfully' });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
}

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};
