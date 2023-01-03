const path = require("path");

//Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Dirname - apenas o nome do diretório atual
console.log(path.dirname(__filename));

//Extensão  do Arquivo
console.log(path.extname(__filename));

//Criar um objeto path
console.log(path.parse(__filename));

//Juntar caminhode arquivos
console.log(path.join(__dirname, "test", "test.html"));
