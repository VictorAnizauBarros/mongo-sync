const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
}

module.exports = { connectDB, client };
