// Import the necessary modules
const readline = require('readline');
const Document = require('./src/models/Document.js');
const DocumentStore = require('./src/models/DocumentStore.js');
const addCommand = require('./src/commands/Add.js');
const searchCommand = require('./src/commands/Search.js');
const deleteCommand = require('./src/commands/Delete.js');
const completer = require('./src/utils/Completer.js');

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // Use the completer function to provide tab autocompletion
  completer: completer
});

// Create a new instance of the DocumentStore
const docStore = DocumentStore.instance;

// Handle user input
rl.on('line', (input) => {
  const command = input.trim().toLowerCase(); // Remove whitespace and convert to lowercase
  switch (command) {
    case 'add':
      addCommand(docStore, rl); // Call the addCommand function to add a document to the store
      break;
    case 'search':
      searchCommand(docStore, rl); // Call the searchCommand function to search for a document in the store
      break;
    case 'delete':
      deleteCommand(docStore, rl); // Call the deleteCommand function to delete a document from the store
      break;
    case 'exit':
      rl.close(); // Close the readline interface
      break;
    default:
      console.log(`Invalid command: ${command}`); // Display an error message for invalid commands
      break;
  }
});

// Display a welcome message and prompt for user input
console.log('Welcome to the document store!');
rl.prompt();