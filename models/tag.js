'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Define Many-To-Many relationship with Article
      this.belongsToMany(models.Article, {
        through: models.ArticleTag,
        foreignKey: 'tagId',
        otherKey: 'articleId',
      });
    }
  }

  Tag.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};
