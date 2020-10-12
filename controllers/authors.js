const authors = require("../models/authors.js")();

module.exports = () => {
  const getController = (req, res) => {
    res.setHeader("Content-type", "application/json");
    return res.end(JSON.stringify(authors.get()));
  };

  const postController = (req, res) => {
    let name = req.body.name;
    authors.add(name);
    return res.end(`Post: ${name}`);
  };

  const getById = (req, res) => {
    res.setHeader("Content-Type", "Application/json");
    res.json(authors.get(req.params.id));
  }

  

  return {
    getController,
    postController,
    getById,
  };
};
