var express = require('express');
const book_controller = require('../controllers/book');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('books', { title: 'Search Results' });
});
*/
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}

/* GET books */
router.get('/', book_controller.book_view_all_Page);
/* GET detail book page */
router.get('/detail', book_controller.book_view_one_Page);
/* GET create book page */
router.get('/create',secured, book_controller.book_create_Page);
/* GET create update page */
router.get('/update',secured, book_controller.book_update_Page);
/* GET delete book page */
router.get('/delete',secured, book_controller.book_delete_Page);


module.exports = router;
