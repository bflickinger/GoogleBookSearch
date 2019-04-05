const router = require('express').Router();
const bookshelfController = require('../../controllers/bookshelfController');

//bookshelf / route
router.route('/')
  .get(bookshelfController.findAll)
  .post(bookshelfController.create);

//bookself /:id route
router.route('/:id')
  .delete(bookshelfController.delete);

module.exports = router;