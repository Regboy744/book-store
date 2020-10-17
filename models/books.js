const db = require("../db.js")();
const COLLECTION = "books";

module.exports = () => {
	const get = async (id = null) => {
		if (!id) {
			console.log("inside models");
			const books = await db.get(COLLECTION);
			return books;
		}
		const books = await db.get(COLLECTION, { id });
		return books;
	};

	const add = async (name, author) => {
		const bookCount = await db.count(COLLECTION);
		const result = await db.add(COLLECTION, {
			id: bookCount + 1,
			name: name,
			author: author,
		});

		return result.result;
	};

	return {
		get,
		add,
	};
};
