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
/* GET detail book page */
router.get('/detail', book_controller.book_view_one_Page);
/* GET create book page */
router.get('/create', book_controller.book_create_Page);
/* GET create update page */
router.get('/update', book_controller.book_update_Page);
/* GET delete book page */
router.get('/delete', book_controller.book_delete_Page);


module.exports = router;
