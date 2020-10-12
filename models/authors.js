
const db = require("../db")();

module.exports = () => {

  const get = (id = null) => {
    console.log("Inside authors model");

    if(!id){
      return db.authors;
    }
    
    return db.authors[parseInt(id) -1];

  };

  const add = (name) => {
    return db.authors.push({
      id: db.authors.length + 1,
      name,
    })
    
  };

  return {
    get,
    add,
  };
};
