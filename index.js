const express = require('express');
const bodyParser = require('body-parser');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const authorController = require('./controllers/authors')();
const booksController = require('./controllers/books')();

const app = module.exports = express();

// Serve our new ./public/index.html
app.use('/', express.static('./public'));

// logging
app.use((req, res, next) => {
  // Allow CORS -- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Display log for requests
  console.log('[%s] %s -- %s', new Date(), req.method, req.url);
  next();
});

app.use(bodyParser.json())

// get all books
app.get('/books', booksController.getController);
// Add a book
app.post('/books', booksController.postController);
// Get a specific book by Id
app.get('/books/:id', booksController.getById);

// Get all authors
app.get('/authors', authorController.getController);
// All a author
app.post('/authors', authorController.postController);
// Get an author by ID
app.get("/authors/:id", authorController.getById);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 404
app.use((req, res) => {
  res.status(404).json({
    error: 404,
    message: 'Route not found',
  });
});