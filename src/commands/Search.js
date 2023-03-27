const readline = require("readline");
const DocumentStore = require("../models/DocumentStore.js");

// define searchDocuments function
function searchDocuments(docStore,rl) {
  // prompt user to enter document path prefix
  rl.question("Enter the document path prefix: ", (path) => {
    // call searchDocuments method of docStore to search for documents with the given prefix
    const documents = docStore.searchDocuments(path);
    // log the documents found
    console.log(documents);
    // prompt user for next input
    rl.prompt();
  });
}

// export the searchDocuments function to be used by other modules
module.exports = searchDocuments;
