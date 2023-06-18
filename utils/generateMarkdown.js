const dayjs = require('dayjs');
var currentDay = dayjs().format('MM/DD/YYYY'); //this dayjs library is used for copyright section


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  //displayed next to the title of the project
  
    let badge = '';
  
    switch (license) {
      case 'MIT':
        badge = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'; //those links are from shields.io and displayed as a badge
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
  
        default:
        badge = ''; //if there is no license, return an empty string
    }
  
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
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
          link = ''; // if there is no license, return an empty string
      }
    
      return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
      const licenseLink = renderLicenseLink(license);
    
      if (!licenseLink) {
        return '';
      }
    
      return `## License 
    This project is licensed under the ${license} license.      
    For more information, please visit ${licenseLink}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ## ${data.title} 

  ${renderLicenseBadge(data.license)}  
  
  ## Table of Contents
  * [Title](#title) 
  * [Description](#description) 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Examples](#examples)
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
  
  ## Features
  ${data.features}

  ## Examples
  ${data.Examples}

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

++++++++++++++++++++++++ copyright (c) ${data.title} ${currentDay} ++++++++++++++++++++++++`;
}

module.exports = generateMarkdown;

