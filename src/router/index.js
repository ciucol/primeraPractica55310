const usersController = require('../users/controller.users')

const router = app => {
  app.use('/users', usersController)
  // app.use('/carts', cartsController)
  // app.use('/products', productsController)
  // app.use('/categories', categoriesController)
  // app.use('/pets', petsController)
}

module.exports = router
