
const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js")

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

    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {title:{
        describe: "Note title",
        demandOption: true,
        type:"string"
    }},
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "List all notes.",
    handler(argv){
       notes.listNotes();
    }
})

// Create read command
yargs.command({
    command:"read",
    describe: "Read a note.",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
       notes.readNote(argv.title);
    }
})

//parse all the yargs arguments
yargs.parse();

//console.log(yargs.argv);



