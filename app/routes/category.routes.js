const controller = require('../controllers/category.controller');
const { verifyCategory } = require('../validators');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });

    app.get('/api/categories', controller.allAllCategories);

    app.get('/api/categories/:id', controller.showCategory);

    app.post(
        '/api/categories',
        [verifyCategory.validateCategoryForm],
        controller.createCategory
    );

    app.put('/api/categories/:id', controller.updateCategory);

    app.delete('/api/categories/:id', controller.deleteCategory);
};