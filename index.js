
// TODO: Include packages needed for this application
const fs = require('fs'); //fs is the package that will allow us to write a file
const inquirer = require('inquirer'); // this is the package we are requesting to prompt the user for input

const generateMarkdown = require('./utils/generateMarkdown.js'); //this generateMarkdown variable will allow us to use the generateMarkdown function from the generateMarkdown.js file

const messages = [ //this is an array of messages that will be displayed to the users when the application  is run
    '\nWelcome to the README generator!',
    'This application will help you create a professional README file for your project',
    'Remember:: You may need to install \x1b[36m inquirer, fs, and dayjs\x1b[0m to run this application on your local machine',
    'You can install all of these by running \x1b[32m npm i inquirer\x1b[0m \x1b[36m/fs/ or /dayjs/\x1b[0m \n',
    
  ];
  
  function instruction() { // display eache message in the messages array
    let x = 0;
  
    const intervalId = setInterval(function () {  //intervalid variable sets an interval of 500ms between each message and then clears the interval once all messages have been displayed
      if (x < messages.length) {
        console.log('\x1b[33m%s\x1b[0m', messages[x]); 
        x++;
      } else {
        clearInterval(intervalId); 
        init(); //we call the init function here to start/initiate the app
      }
    }, 500);
  }
  

const questions = [ //this is an array of question
    {
        type: 'input',
        name: 'title',
        message: 'Enter the \x1b[32m title \x1b[0m of your project:',
        validate: title => { //this will check if the user has entered a data or not
        if (title){ 
            return true;
        } else {
            console.log('Please enter \x1b[32m a title \x1b[0m for your project!');  //if not then the user willbe prompted to enter the data again
            return false;
        }
        }
    },
    {
        type: 'list',// here is the list of choices for desired license choice
        name: 'license',
        message: 'Choose a \x1b[32m license \x1b[0m for your project:', //we use color codes to make neccessary text stand out
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'], 
        validate: license => { 
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


function writeToFile(fileName, data) { //this is our function which allow us to create a readme.md file and writing a data to it!
    fs.writeFile('./README.MD', fileName, data, function (err) {   //this is the fs.writeFile function which will create a readme.md file and write the data to it
        if (err) {
            return console.log(err); 
        }
        console.log("\x1b[33m README.md file created successfully! \x1b[0m");
    })
}

// TODO: Create a function to initialize app
function init() { //this is our function which initialize the application and prompt the user for input
    inquirer.prompt(questions).then(function
        (data) {
        console.log(data);
        var fileName = generateMarkdown(data); //this fileName variable will hold the data that is passed into the generateMarkdown function
        writeToFile(fileName) //this will call the writeToFile function and pass the fileName variable into it
        }
    )
}


instruction(); //now we call this function at the begining of our app execution

