const readline = require("readline");
const Document = require("../models/Document.js");
const DocumentStore = require("../models/DocumentStore.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const docStore = new DocumentStore();

function addDocument() {
  rl.question("Enter the document path: ", (path) => {
    rl.question("Enter the document text: ", (text) => {
      const document = new Document(text);
      try {
        docStore.addDocument(path, document);
        console.log("Document added successfully.");
      } catch (err) {
        console.log(err.message);
      }
      rl.prompt();
    });
  });
}

module.exports = addDocument;
