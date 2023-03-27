const readline = require('readline');

function deleteDocument(docStore, rl) {
  // Ask the user to enter the path of the document to delete
  rl.question('Enter the path of the document to delete: ', (path) => {
    try {
      // Attempt to delete the document from the store
      docStore.deleteDocument(path);
      console.log('Document deleted successfully.');
    } catch (err) {
      // If there was an error deleting the document, log the error message
      console.log(err.message);
    }
    rl.prompt();
  });
}

module.exports = deleteDocument;