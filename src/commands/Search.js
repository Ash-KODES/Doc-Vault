const readline = require("readline");
const DocumentStore = require("../models/DocumentStore.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const docStore = new DocumentStore();

function searchDocuments() {
  rl.question("Enter the document path prefix: ", (path) => {
    const documents = docStore.searchDocuments(path);
    console.log(documents);
    rl.prompt();
  });
}

module.exports = searchDocuments;
