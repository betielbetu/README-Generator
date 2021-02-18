// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badge) {
  return `# ${data.Title}
  # Badge
  ![license](${badge})
  # Description
  ${data.Description}

  # Table of Contents
  1. [Description](#Description)
  2. [Username](#Username)
  3. [Email](#Email)
  4. [Installation](#Installation)
  5. [Usage](#Usage)
  6. [Test](#Test)
  7. [License](#License)

  ## Description
  ${data.Description}
  ## Username
  ${data.Username}
  ## Email
  ${data.Email}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Test
  ${data.Test}
  ## License
  ${data.License}


`;
}

module.exports = generateMarkdown;
