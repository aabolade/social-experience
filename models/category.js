var Category = sequelize.define('category', {
  name: Sequelize.STRING
});

Category.belongsToMany(Story, {through: 'StoryCategory'});
