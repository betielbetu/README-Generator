// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const axios = require("axios");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please give description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "Please enter your Github username?",
        name: "Username",
    },

    {
        type: "input",
        message: "Please enter your email address?",
        name: "Email",
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
        message: "What command do you use to test this app?",
        name: "Test",
        
    },
    {
        type: "input",
        message: "What license are you using?",
        name: "License",
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Sucessfully wrote: " + fileName);
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            var badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
            writeToFile("SampleREADME.md", generateMarkdown(data, badge));

        })
}

// Function call to initialize app
init();
