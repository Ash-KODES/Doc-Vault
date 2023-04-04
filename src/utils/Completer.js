// Import the DocumentStore module
const DocumentStore = require("../models/DocumentStore.js");

// Function to provide autocompletion suggestions
function completer(linePartial, callback) {
  const suggestions = [];
  // Get all the document paths from the DocumentStore instance
  const paths = Array.from(DocumentStore.instance.documents.keys());
  // Find all the paths that start with the input linePartial
  for (const path of paths) {
    if (path.startsWith(linePartial)) {
      suggestions.push(path);
    }
  }
  // Call the callback function with the suggestions and the linePartial
  callback(null, [suggestions, linePartial]);
}

// Export the completer function
module.exports = completer;
