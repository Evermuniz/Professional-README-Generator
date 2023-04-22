// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //let licenseSelected = "";
  if ((license = "Apache License")) {
    licenseSelected =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if ((license = "MIT License")) {
    licenseSelected =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if ((license = "GNU GPLv3 License")) {
    licenseSelected =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if ((license = "None")){
    licenseSelected = ""
  }

  return licenseSelected;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseSelected = "";
  if (license !== "None") {
    return `\n - [License](#license)\n`;
  }
  return licenseSelected;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

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

module.exports = generateMarkdown;
