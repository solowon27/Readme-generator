const dayjs = require('dayjs');// we requesting a dayjs library
var currentDay = dayjs().format('MM/DD/YYYY'); //get the current date and format it

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  //this function will return a badge based on the license selected by the user
  
    let badge = ''; 
  
    switch (license) { /// we use switch method to check the license type selected by the user and to return the badge 
      case 'MIT':
        badge = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'; //those are badge links
        break;
      case 'GNU GPLv3':
        badge = '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        break;
      case 'Apache 2.0':
        badge = '[License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        break;
      case 'ISC':
        badge = '[License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
        break;
  
        default:// this will return an empty string if no license is selected
        badge = '';
    }
  
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  //return a link to the selected license // this function has the same structure and method with the above renderLicenseBadge function
  
      let link = ''; 
    
      switch (license) {
        case 'MIT':
          link = 'https://opensource.org/licenses/MIT';
          break;
        case 'GNU GPLv3':
          link = 'https://www.gnu.org/licenses/gpl-3.0';
          break;
        case 'Apache 2.0':
          link = 'https://opensource.org/licenses/Apache-2.0';
          break;
        case 'ISC':
          link = 'https://opensource.org/licenses/ISC';
          break;
        default: 
          link = ''; 
      }
    
      return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
      const licenseLink = renderLicenseLink(license); //hold the license link
    
      if (!licenseLink) {  //if there is no license link return an empty string
        return '';
      }
    
      return `## License  
    This project is licensed under the ${license} license.      
    For more information, please visit ${licenseLink}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //this is our function that will be called in our index.js file and display/generate the readme.md file
  return ` ## ${data.title} 

  ${renderLicenseBadge(data.license)} 
  
  ## Table of Contents 
  * [Title](#title)  
  * [Description](#description) 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Resources](#resources)
  * [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Resources
  ${data.resources}

  ## Questions
  For additional questions, contact ${data.Author} via:
  - GitHub: [${data.gitHub}](https://github.com/${data.gitHub})
  - Email: ${data.email}

++++++++++++ copyright (c) ${data.title} ${currentDay} ++++++++++++`;
}

module.exports = generateMarkdown;  //finally we export the generateMarkdown functon to be used in the index.js


