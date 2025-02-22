'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArticleTag extends Model {}

  ArticleTag.init({
    articleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Articles',
        key: 'id',
      },
      allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tags',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ArticleTag',
  });

  return ArticleTag;
};
