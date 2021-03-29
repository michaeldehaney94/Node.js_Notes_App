const fs = require('fs');

// const book = { //object with data
//     title: 'The Alchemist',
//     author: 'Paulo Coelho'
// }

// //to convert object into string, using JSON.stringify()
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // const parseData = JSON.parse(bookJSON); 
// // //returns the data as a object
// // console.log(parseData.author);

// fs.writeFileSync('1-json.json', bookJSON); 
// //using file system to create json file and pass data into the file
// //run node to create file
// //when the 2nd argument is pass to json file, it will become string

// const dataBuffer = fs.readFileSync('1-json.json');
// //this will return a buffer of binary number or decimals
// //to get it to return the string, add toString() method
// const dataJSON = dataBuffer.toString();
// //console.log(dataJSON);
// const data = JSON.parse(dataJSON);
// console.log(data.title); //output title property in an object

//Challenge
//The json data is already in string, change back to object, then
//back to string after changing json data info.
const dataLoad = fs.readFileSync('1-json.json'); //load json data
const dataJSON = dataLoad.toString(); //stringify data
const user = JSON.parse(dataJSON); //parse data
//modify name and age data in json file
user.name='Thomas';
user.age='25'
//stringify data
const userJSON = JSON.stringify(user);
//write new data to file to override
fs.writeFileSync('1-json.json', userJSON); 

