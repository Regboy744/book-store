const books = require("../models/books")();

module.exports = () => {
  const getController = (req, res) => {
    res.setHeader("Content-Type", "Application/jadon");
    return res.end(JSON.stringify(books.get()));
  };

  const postController = (req, res) => {
    let name = req.body.name;
    const author = req.body.author;
    books.add(name);
    return res.end(`Post: ${name}`);
  };

  const getById = (req, res) =>{
    res.setHeader("Content-Type", "Application/json");
    res.json(books.get(req.params.id));

  }

  return {
    getController,
    postController,
    getById,
  };
};
