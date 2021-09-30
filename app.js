const fs = require("fs"); 

// create the new file and create it with some starting text
fs.writeFileSync('notes.txt', 'This file was created by Node.js');

// add new information to the file that you've created above. 
fs.appendFileSync('notes.txt', "\nLook a tthe thing I made.");