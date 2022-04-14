var express = require('express');
const book_controller = require('../controllers/book');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('books', { title: 'Search Results' });
});
*/

/* GET books */
router.get('/', book_controller.book_view_all_Page );

module.exports = router;
