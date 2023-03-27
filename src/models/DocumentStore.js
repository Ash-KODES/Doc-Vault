const Document = require("./Document.js");

class DocumentStore {
  constructor() {
    // using a Map to store the documents at various paths
    this.documents = new Map();
  }

  // Function to add a new document at a particular path
  addDocument(path, document) {
    // Check if a document already exists at the given path
    if (this.documents.has(path)) {
      throw new Error(`Document already exists at path: ${path}`);
    }
    // Add the document to the Map
    this.documents.set(path, document);
  }

  // Function to search for documents at a given path or with a path prefix
  searchDocuments(path) {
    // Filter the paths in the Map to match the given path or prefix
    const matchingPaths = Array.from(this.documents.keys()).filter((p) =>
      p.startsWith(path)
    );
    // Return an array of matching documents
    return matchingPaths.map((p) => this.documents.get(p));
  }

  // Function to delete a document at a given path
  deleteDocument(path) {
    // Check if a document exists at the given path
    if (!this.documents.has(path)) {
      throw new Error(`Document does not exist at path: ${path}`);
    }
    // Delete the document from the Map
    this.documents.delete(path);
  }
}

module.exports = DocumentStore;
