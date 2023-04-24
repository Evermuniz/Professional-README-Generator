//This function will take the license that was selected in index.js and return a badge 
//based on the input or an empty string if none was selected
function renderLicenseBadge(license) {
if (license !== "None") {
  if ((license === "Apache 2.0")) {
    licenseSelected =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if ((license === "MIT")) {
    licenseSelected =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if ((license === "GNU GPLv3")) {
    licenseSelected =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  return licenseSelected;
}
return '';
}

// This funcion will create a license link to navigate within the README 
//if no license was selected then this will not generate in the file
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n - [License](#license)\n`;
  }
  return '';
}

// This function will generate a license section if a license was selected
//if no license was selected then no license will generate
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return "";
}

// This function will generate the actual readme content
function generateMarkdown(data) { //the data parameter is passed from the inquirer prompts
  const licenseBadge = renderLicenseBadge(data.license); //variables placed inside the function so they are defined after data is passed
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  //returning everything here as the content for the README and using the user answers to fill content
  return `# ${data.title}     
  
  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${licenseSection}

  ## Contributing
  
  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please contact me at ${data.email}.
  You can also visit my GitHub profile [here](https://github.com/${data.github}/)
  `;
}

//exporting the returned README content from the generateMarkdown function to be used in index.js 
module.exports = generateMarkdown; 
