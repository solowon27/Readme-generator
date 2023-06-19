
//read the following comment carefully


//this is our index file which consist the questions array and also both the init and writeToFile function
//the init function is the function that will be called to start the application
//but the instructions function will be called first to display the messages to the user

//the writeToFile function will be called after the user has answered all the questions
//the generateMarkdown function will be called to generate the README.md file


//i already commented out the code here in the index and generateMarkdown files,

// so we are going to test the application by running the index.js file in the terminal

//i did this because due to the size of video files, i was unable to upload the video to the github repo


//so to test the application, we will run the index.js file in the terminal by typing node index.js

// TODO: Include packages needed for this application
const fs = require('fs');   //lets request the fs module which writes the file
const inquirer = require('inquirer'); //inquirer package is used to prompt the user for input
const generateMarkdown = require('./utils/generateMarkdown.js'); //this is the generateMarkdown.js file which will be used to generate the README.md file

const messages = [ //this is the array of messages that will be displayed to the user when the application is run
    '\nWelcome to the README generator!',
    'You may need to install \x1b[36m inquirer, fs, and dayjs\x1b[0m to run this application',
    'You can install all of these by running \x1b[32m npm i inquirer\x1b[0m \x1b[36m/fs/ or /dayjs/\x1b[0m \n',
    
  ];
  
  function instruction() { 
    let x = 0;
  
    const intervalId = setInterval(function () {
      if (x < messages.length) {
        console.log('\x1b[33m%s\x1b[0m', messages[x]); 
        x++;
      } else {
        clearInterval(intervalId); 
        init(); //we call our init function here after the messages have been displayed
      }
    }, 500); // display each message every 500 milliseconds
  }
  
// TODO: Create an array of questions for user input
const questions = [ //this is the array of questions that will be asked to the user
    {
        type: 'input',
        name: 'title',
        message: 'Enter the \x1b[32m title \x1b[0m of your project:',
        validate: title => { 
        if (title){ 
            return true;
        } else {
            console.log('Please enter \x1b[32m a title \x1b[0m for your project!'); 
            return false;
        }
        }
    },
    {
        type: 'list', // a dropdown list of licenses to choose from
        name: 'license',
        message: 'Choose a \x1b[32m license \x1b[0m for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'], 
        validate: license => { //we use this validate function to make sure the user chooses a license
            if (license) {
                return true;
            } else {
                console.log('Please choose a license for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a \x1b[32m  description \x1b[0m  of your project:',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('please enter a \x1b[32m description \x1b[0m of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter \x1b[32m installation instructions \x1b[0m for your project:',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project! you can say N/A if not applicable');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter \x1b[32m usage information \x1b[0m for your project:',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please enter usage information for your project! you can say N/A if not applicable');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'Enter \x1b[32m features \x1b[0m of your project:',
    },
    {
        type: 'input',
        name: 'Examples',
        message: 'Enter \x1b[32m examples \x1b[0m of your project:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter \x1b[32m contribution guidelines \x1b[0m for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter \x1b[32m test instructions \x1b[0m for your project:',
    },
  {
        type: 'input',
        name: 'resources',
        message: 'Enter \x1b[32m resources \x1b[0m for your project!:',
  },
  {
        type: 'input',
        name: 'Author',
        message: 'Enter \x1b[32m Authors \x1b[0m of your project:',
        validate: Authors => {
            if (Authors) {
                return true;
            } else {
                console.log('Please enter \x1b[32m authors \x1b[0m of your project!');
                return false;
            }
        }
  },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your \x1b[32m GitHub \x1b[0m username :',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your \x1b[32m email \x1b[0m address :',
        validate: email => {
            if (email && email.includes('@') && email.includes('.')) {
                return true;
            } else {
                console.log('\x1b[32m Please enter a valid email address!\x1b[0m');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file


function writeToFile(fileName, data) { // here we have a function that will write the README file
    fs.writeFile('./README.MD', fileName, data, function (err) {   
        if (err) {
            return console.log(err); //if there is an error, we will log it to the console an error message
        }
        console.log("\x1b[33m README.md file created successfully! \x1b[0m");
    })
}

// TODO: Create a function to initialize app
function init() { //this is the function that will initialize the app
    inquirer.prompt(questions).then(function
        (data) {
        console.log(data);
        var fileName = generateMarkdown(data); //from the generateMarkdown.js file, we will call the generateMarkdown function and pass in the data from the questions array
        writeToFile(fileName)
        }
    )
}


// Function call to initialize app
instruction(); //we call the instruction function here to display the messages to the user then the init() will be called after the 
//messages have been displayed


//lets see the generateMarkdown.js file now