// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
function init(){
inquirer
  .prompt([
    { 
      type: "input",
      message: "What is the title",
      name: "title",  
         },
    { 
      type: "input",
      message: "give a description",
      name: "description",  
         },
    {
       type: "input",
       message: "how do you install it",
       name: "installation",
    },
    
    {
        type: "input",
        message: "How do use it",
        name: "usage",
    },
      
    {
        type: "input",
        message: "github username",
        name: "name"
    },
    
  ])
  .then((response) => {
    return fs.writeFileSync(process.cwd(), "README.md"), generate(response);
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeToFile(fileName, data, (err) =>{

        if (err){ 

            return console.log(err);

        }
        console.log('you have created a readme file.')
    })
}
}

  
//initialize app

init();



