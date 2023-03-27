const readline = require("readline");
const DocumentStore = require("../models/DocumentStore.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const docStore = new DocumentStore();

function deleteDocument() {
  rl.question("Enter the document path: ", (path) => {
    try {
      docStore.deleteDocument(path);
      console.log("Document deleted successfully.");
    } catch (err) {
      console.log(err.message);
    }
    rl.prompt();
  });
}

module.exports = deleteDocument;
