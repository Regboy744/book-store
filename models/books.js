const db = require("../db")();

module.exports = () => {

  const get = (id = null) => {
    console.log("inside books model");
    
    if(!id){
      return db.books;
    }
    return db.books[parseInt(id) - 1];
    
  };

  const add = (name, author) => {
    return db.books.push({
      id: db.books.length + 1, // It gest the current length and add one more and the new book goes to the next id
      name: name,
      author: author
    });
  };

  return {
    get,
    add,
  };
};
