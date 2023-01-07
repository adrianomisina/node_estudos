const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.x20baxa.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorre um erro ao se conectar com o banco de dados",
          error
        );
      }
      return console.log("conexão ao banco de dados realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
