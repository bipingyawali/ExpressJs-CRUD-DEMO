module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    'categories',
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE, // Explicitly define the soft-delete timestamp
        allowNull: true,
      },
    },
    {
      paranoid: true, // Enables soft delete
      timestamps: true, // Ensures createdAt and updatedAt fields are included
    }
  );
  return Category;
};
