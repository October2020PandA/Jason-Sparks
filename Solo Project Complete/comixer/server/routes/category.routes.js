const CategoryController = require('../controllers/category.controller');

module.exports = function(app){
    app.post('/api/categories', CategoryController.createCategory);
    app.get('/api/categories', CategoryController.getAllCategories);
    app.get('/api/categories/:id', CategoryController.getCategory);
    app.put('/api/categories/:id', CategoryController.updateCategory);
    app.delete('/api/categories/:id', CategoryController.deleteCategory);
}
