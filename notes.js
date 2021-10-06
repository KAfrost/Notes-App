const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => { return "Your notes..."};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0){
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
    removeNote: removeNote
};