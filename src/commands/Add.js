const readline = require("readline");
const Document = require("../models/Document.js");
const DocumentStore = require("../models/DocumentStore.js");

// Create a readline interface for taking input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a new instance of the DocumentStore class
const docStore = new DocumentStore();

// Define a function for adding a new document to the store
function addDocument() {
  // Ask the user to enter the path and text for the document
  rl.question("Enter the document path: ", (path) => {
    rl.question("Enter the document text: ", (text) => {
      // Create a new Document object with the entered text
      const document = new Document(text);
      try {
        // Attempt to add the new document to the store
        docStore.addDocument(path, document);
        console.log("Document added successfully.");
      } catch (err) {
        // If there was an error adding the document, log the error message
        console.log(err.message);
      }
      rl.prompt();
    });
  });
}

// Export the addDocument function so it can be used by other modules
module.exports = addDocument;
