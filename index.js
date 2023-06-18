// TODO: Include packages needed for this application
const fs = require('fs');   //our file system module to write the README file
const inquirer = require('inquirer'); //inquirer module to prompt the user with questions or initiate the app
const generateMarkdown = require('./utils/generateMarkdown.js'); //this is the generateMarkdown module file that will generate the README file

const messages = [ //this message will appear when the user run the app
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
        init(); //after all the messages are displayed, the init function will be called to prompt the user with questions
      }
    }, 500); // display each message every 500 milliseconds
  }
  
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the \x1b[32m title \x1b[0m of your project:',
        validate: title => { 
        if (title){ //this validate checks if the user entered a title or not if it is true it will return true and if not it will return false and console.log a message 
            return true;
        } else {
            console.log('Please enter \x1b[32m a title \x1b[0m for your project!'); //please enter a title for your project will be displayed if the user did not enter a title
            return false;
        }
        }
    },
    {
        type: 'list', //this is like a dropdown menu    
        name: 'license',
        message: 'Choose a \x1b[32m license \x1b[0m for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log('Please choose a license for your project!'); //mandatory field
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
function writeToFile(fileName, data) { //this function will write the README.md file
    fs.writeFile('./README.MD', fileName, data, function (err) {   //this function will write the README.md file
        if (err) {
            return console.log(err);
        }
        console.log("\x1b[33m README.md file created successfully! \x1b[0m");
    })
}

// TODO: Create a function to initialize app
function init() { //this ffunction initializes the app and prompts the user with questions
    inquirer.prompt(questions).then(function
        (data) {
        console.log(data);
        var fileName = generateMarkdown(data); //from the generateMarkdown.js file
        writeToFile(fileName)
        }
    )
}


// Function call to initialize app
instruction(); //our app starts with this function and init() function will be called after the instruction function is done


//lets move to our generateMarkdown.js file to see what is next