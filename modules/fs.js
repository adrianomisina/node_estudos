const fs = require("fs");
const path = require("path");

//criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log(`Erro: ${error}`);
  }

  console.log("Pasta criada com sucesso :)");
});
