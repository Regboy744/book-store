// This is our enviroment variables we goint to use base on the library we have instaled
const uri = process.env.MONGO_URI;
const MongoClient = require("mongodb").MongoClient;

// This will be name of our database
const DB_NAME = "book-store";

// I don`t knoe what this line do
const MONGO_OPTIONS = { useUnifiedTopology: true, useNewUrlParser: true };

//
module.exports = () => {
	const count = (collectionName) => {
		return new Promise((resolve, reject) => {
			MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
				const db = client.db(DB_NAME);
				const collection = db.collection(collectionName);

				collection.countDocuments({}, (err, docs) => {
					resolve(docs);
					client.close();
				});
			});
		});
	};

	const get = (collectionName, query = {}) => {
		return new Promise((resolve, reject) => {
			MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
				const db = client.db(DB_NAME);
				const collection = db.collection(collectionName);

				collection.find(query).toArray((err, docs) => {
					resolve(docs);
					client.close();
				});
			});
		});
	};

	const add = (collectionName, item) => {
		console.log("called add");
		return new Promise((resolve, reject) => {
			// the follwee line stands for connect to mongoDb using uri
			//
			MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
				const db = client.db(DB_NAME);
				const collection = db.collection(collectionName);
				collection.insertOne(item, (err, result) => {
					resolve({ result });
				});
			});
		});
	};

	return {
		count,
		get,
		add,
	};
};
