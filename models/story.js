var Story = sequelize.define('story',{
  country: Sequelize.STRING,
  city: Sequelize.STRING,
  perspective: Sequelize.STRING,
  title: Sequelize.STRING,
  content: Sequelize.STRING
});

Story.belongsToMany(Category, {through: 'StoryCategory'};
