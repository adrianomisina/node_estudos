const fs = require("fs");
const path = require("path");

//criar uma pasta
// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     return console.log(`Erro: ${error}`);
//   }

//   console.log("Pasta criada com sucesso :)");
// });

// criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "test.txt"),
      "hello world!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Modificado com sucesso!");
      }
    ),
      //Ler arquivos
      fs.readFile(
        path.join(__dirname, "/teste", "test.txt"),
        "utf-8",
        (error, data) => {
          if (error) {
            return console.log("Erro: ", error);
          }

          console.log(data);
        }
      );
  }
);
