const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => { return chalk.cyan.bold("Your notes...")};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    }else{
        console.log(chalk.red.inverse("Note title taken."));
    }

} 
const removeNote = (title) =>{
    const notes = loadNotes();
    const keeperNotes = notes.filter((note) => note.title !== title);

    // My solution... totally works, but...
    // const foundNote = notes.filter(function (note){
    //     return note.title === title;
    // })
    // if (foundNote.length !== 0){
    //     saveNotes(keeperNotes);
    //     console.log(chalk.green("Note named " + title + " removed."))
    // }else{
    //     console.log(chalk.red("Note named " + title + " not found."))
    // }

    if (notes.length > keeperNotes.length){
        saveNotes(keeperNotes);
        console.log(chalk.green.inverse("Note named " + title + " removed."))
    }else{
        console.log(chalk.red.inverse("Note named " + title + " not found."))
    }
   
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(getNotes());
    notes.forEach(note => { console.log(note.title);});
}

const readNote = (title) => {
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title === title);

    if (readNote){
        console.log(chalk.cyan(readNote.title))
        console.log(readNote.body);
    }else{
        console.log(chalk.red.inverse("No note found with title " + title));
    }
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

module.exports = {getNotes:getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote: readNote
};