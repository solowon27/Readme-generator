const dayjs = require('dayjs');
var currentDay = dayjs().format('MM/DD/YYYY');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
    let badge = '';
  
    switch (license) {
      case 'MIT':
        badge = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
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
        badge = '';
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
          link = '';
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
  return `
  # Title 
  ${data.title} 

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
  * [Author](#author)
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
  ${data.examples}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Resources
  ${data.resources}

  ## Author
  ${data.author}

  ## Questions
  For additional questions, contact me via:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

++++++++++++++++++++++++ copyright (c) ${data.title} ${currentDay} ++++++++++++++++++++++++`;
}

module.exports = generateMarkdown;
