const readline = require('readline');
const Document = require('./src/models/Document.js');
const DocumentStore = require('./src/models/DocumentStore.js');
const addCommand = require('./src/commands/Add.js');
const searchCommand = require('./src/commands/Search.js');
const deleteCommand = require('./src/commands/Delete.js');
const completer = require('./src/utils/Completer.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
});

const docStore = DocumentStore.instance;

rl.on('line', (input) => {
  const command = input.trim().toLowerCase();
  switch (command) {
    case 'add':
      addCommand(docStore, rl);
      break;
    case 'search':
      searchCommand(docStore, rl);
      break;
    case 'delete':
      deleteCommand(docStore, rl);
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log(`Invalid command: ${command}`);
      break;
  }
});

console.log('Welcome to the document store!');
rl.prompt();
