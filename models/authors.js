const db = require("../db.js")();
const COLLECTION = "authors";

module.exports = () => {
	const get = async (id = null) => {
		console.log("Inside authors model");

		if (!id) {
			const authors = await db.get(COLLECTION);
			return authors;
		}
		const author = await db.get(COLLECTION, { id });
		return author;
	};

	const add = async (name) => {
		const authorCount = await db.count(COLLECTION);
		const result = await db.add(COLLECTION, {
			id: authorCount + 1,
			name: name,
		});
		return result.result;
	};

	return {
		get,
		add,
	};
};
