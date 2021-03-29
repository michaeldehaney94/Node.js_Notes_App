const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs'); 
//first downlaod yargs from npm to parse input from command line
const notes = require('./notes.js'); //import notes.js file

//const command = process.argv[2];
//it outputs a file path of the directory to the executable and file
//console.log(process.argv);

//customize yargs version to latest version
yargs.version('16.2.0');

//Create Add Command
//call the object 'command' and setup command property settings
yargs.command({
    command: 'add', //add data
    describe: 'Add a new note', //explaining what the command is to doing
    builder: { //using builder object to add title to command
        title: {
            describe: 'Note title',
            demandOption: true, //set to true to include property in output
            //demandOption activates the property
	        type: 'string' //to pass the property data type
        },
        postedBy: {
            describe: 'Author',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        // //log property data to json file 
        // //output builder property
        notes.addNote(argv.title, argv.postedBy, argv.body);
        //pass the properties in ADD builder to the function 
        //parameter of 'addNote
    }
})

//Create Remove Command
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder: {
        title: { //remove note by finding title
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }     
    },
    handler (argv) {
        //console.log('Removing the note');
        notes.removeNote(argv.title)
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe:'List your notes',
    handler () {
        notes.listNotes()
    }
})

//Create Read Command 
yargs.command({
    command: 'read',
    describe:'Read a note',
    builder: {
            title:{
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
    },
    handler (argv) {
        //console.log('Reading the note');
        notes.readNote(argv.title)
    }
})

yargs.parse(); //turns to object
//console.log(yargs.argv); 

//run 'node app.js add --title="Things to buy"' in terminal 
//yargs.argv will parse argument in command line
//run in terminal:node app.js --help, to see commands

//to include builder in output
//run, ' node app.js add --title="Buy" --body="Items on list" '
//assignment input to properties using equal(=)

//remove command
//node app.js remove --title="Fruit"

