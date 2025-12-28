const { client } = require("../config/database");
const User = require("../models/User");

async function insertUser(req, res) {
  const { name, age } = req.body;
  const db = client.db("test");
  const collection = db.collection("usuarios");
  try {
    const user = new User(name, age);
    const result = await collection.insertOne(user);
    res.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = { insertUser };
