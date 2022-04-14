var Book = require('../models/book');
// List of all books
exports.book_list = async function (req, res) {
    try {
        theBooks = await Book.find();
        res.send(theBooks);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific book.
exports.book_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Books.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Book create on POST.
exports.book_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Book_title":"To Kill a Mockingbird", "genre":"Fiction", "cost":18}
    document.Book_title = req.body.Book_title;
    document.genre = req.body.genre;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle car delete form on DELETE.
exports.book_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.book_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Book.findById(req.params.id)
        // Do updates of properties
        if (req.body.Book_title) toUpdate.Book_title = req.body.Book_title;
        if (req.body.genre) toUpdate.genre = req.body.genre;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.book_view_all_Page = async function (req, res) {
    try {
        theBooks = await Book.find();
        res.render('books', { title: 'Book Search Results', results: theBooks });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
