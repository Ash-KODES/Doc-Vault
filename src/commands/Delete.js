const readline = require("readline"); // import the 'readline' module for user input
const DocumentStore = require("../models/DocumentStore.js"); // import the DocumentStore class

const rl = readline.createInterface({ // create a readline interface for user input
  input: process.stdin,
  output: process.stdout,
});

const docStore = new DocumentStore(); // create a new DocumentStore instance

function deleteDocument() { // define a function to handle the 'delete' command
  rl.question("Enter the document path: ", (path) => { // prompt the user to enter a document path
    try {
      docStore.deleteDocument(path); // call the 'deleteDocument' method on the DocumentStore instance
      console.log("Document deleted successfully.");
    } catch (err) {
      console.log(err.message); // log any errors that occur during the deletion process
    }
    rl.prompt(); // display the readline prompt to the user for further input
  });
}

module.exports = deleteDocument; // export the 'deleteDocument' function for use in other modules
