const books = require("../models/books.js")();

module.exports = () => {
	const getController = async (req, res) => {
		console.log("inside getControllet");
		res.json(await books.get());
	};

	const postController = async (req, res) => {
		const name = req.body.name;
		const author = req.body.author;
		const result = await books.add(name, author);
		res.json(result);
	};

	const getById = async (req, res) => {
		res.json(await books.get(parseInt(req.params.id)));
	};

	return {
		getController,
		postController,
		getById,
	};
};
