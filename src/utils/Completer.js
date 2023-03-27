const DocumentStore = require('../models/DocumentStore.js');

function completer(linePartial, callback) {
  const suggestions = [];
  const paths = Array.from(DocumentStore.instance.documents.keys());
  for (const path of paths) {
    if (path.startsWith(linePartial)) {
      suggestions.push(path);
    }
  }
  callback(null, [suggestions, linePartial]);
}

module.exports = completer;
