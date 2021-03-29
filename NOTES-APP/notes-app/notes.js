const fs = require('fs') //file system
const chalk = require('chalk'); //add colour design to output

// const getNotes = () => {
//     return 'Your notes...'
// }

//this function will be responsible for adding a note
//title and body are passed in the parameter to represent
//the properties from ADD command object properties
const addNote = (title, postedBy, body) => {
    const notes = loadNotes() //call loaded file into add note function
    //notes is now the array returned by the loadNotes function
   
    // const duplicateNotes = notes.filter( (note) => 
    //     note.title === title
    // )

     // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    //Another filter method used to find duplicate
    const duplicateNote = notes.find((note) => 
        note.title === title
    )
  
    //the filter will cycle through JSON data added to see if it already exist
    //could also be 'duplicateNote === undefined'
    if (!duplicateNote) {
        notes.push({ //the array has been changed by push method
            title: title,
            postedBy: postedBy,
            body: body
        }) //title and body are added to load data from app.js
        saveNotes(notes) //savedNotes function call
        console.log(chalk.bgGreen('New note added!'));
    } else {
        console.log(chalk.bgMagenta('Note title already taken!'));
    }
}

//removeNote command function
const removeNote = (title) => {
    const notes = loadNotes() //load existing notes
    //filter the note you are searching for by finding title
    //will return true if the title match what you entered
    //returns false if it doesn't
    const notesToKeep = notes.filter((note) => 
        note.title !== title
    )
    saveNotes(notesToKeep)
    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title    
    // })
    //checking if note was removed
    if(notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note Remove!'))
        //save notes that remain in file
    } else {
        console.log(chalk.bgRed('Note doesn\'t exist!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes() //load data from file

    console.log(chalk.bgGreen('Notes Posted...')) //header

    notes.forEach((note) => {
        console.log(chalk.bgBlueBright(note.title)) //print title of each note
    });  
}

//read note command
const readNote = (title) => {
    const notes = loadNotes()
    //filter method to find what you entered
    const note = notes.find((note) => 
        note.title === title 
        //returns true if note is found via title
    )
    if (note) {
        //print title
        console.log(chalk.black.bgYellow(note.title)) 
        //print body associated with title
        console.log(chalk.bgBlueBright(note.body))
    } else {
        console.log(chalk.bgRed('Note doesn\'t exist!'))

    }

}

//reusable function to save data
const saveNotes = (notes) => { //add array to parameter
    //stringify data in order to save to file
    const dataJSON = JSON.stringify(notes)
    //save file by writing
    fs.writeFileSync('notes.json', dataJSON)
}

//reusable function to load existing notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')//to load file
        const dataJSON = dataBuffer.toString() //turn into string
        return JSON.parse(dataJSON)
    } catch (e) {
        return [] 
        //the array prevent file overriding to keep existing data
        //existing data will not be overwritten because the empty array
        //data will be loaded to the array, then added to the 
        //array and later saved to the file
    }
    //the array turns into an object to be used in js files or ADD command
}
//assign to an object
//these functions from up above will be exported
//to be used by another file
module.exports = {
   // getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}