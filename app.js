
const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const getNotes = require("./notes.js")

yargs.version("1.1.0");

// Create add command
yargs.command({
    command: "add", 
    describe: "Add a new note",
    builder: {
        title: {
            describe:"Note title",
            // makes the title of the note required
            demandOption: true,
            // requires it to be a string value
            type:"string"
        }, 
        body: {
            describe:"Note Body",
            demandOption: true,
            type:"string"
        }
    },

    handler: function(argv){
        console.log("Title: " + argv.title  + "\nNote body: " + argv.body);
    }
})

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function(){
        console.log("Removing the note.");
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "List all notes.",
    handler: function(){
        console.log("Listing all notes.");
    }
})

// Create read command
yargs.command({
    command:"read",
    describe: "Read a note.",
    handler: function(){
        console.log("Here is your note.");
    }
})

//parse all the yargs arguments
yargs.parse();

//console.log(yargs.argv);



