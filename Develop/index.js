// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is your Github username?",
        name: "Username",
    },
    {
        type: "input",
        message: "what is your email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "what is the title for your project?",
        name: "Title",
    },

    {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What necessary dependencies must be installed to run this app?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Please add contirbutors?",
        name: "Contributor",
    },
    {
        type: "input",
        message: "What command do you use to test this app?",
        name: "Test",
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
      
fs.writeFile("./Develop/" + fileName, data, funtion(err) {
    if(err) {
        return console.log(err);
    }
    console.log ("Sucessfully wrote: " + fileName);
})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
            writeToFile("DemoREADME.md", generatorMarkdown(data));

    })
}

// Function call to initialize app
init();
