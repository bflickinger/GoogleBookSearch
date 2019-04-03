const router = require('express').Router();
const bookshelfController = require('../../controllers/bookshelfController');

//'/api/bookshelf' route
router.route('/')
  .get(bookshelfController.findAll)
  .post(bookshelfController.create);

//'/api/bookshelf/:id' route
router.route('/:id')
  .delete(bookshelfController.delete);

module.exports = router;