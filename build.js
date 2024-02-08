'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('                       antlis'),
  handle: chalk.white('antlis'),
  work: chalk.white('Front-end developer at MTS'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.cyan('antlis'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('antlis5'),
  github: chalk.gray('https://github.com/') + chalk.green('antlis'),
  web: chalk.gray('https://antlis.xyz'),
  npx: chalk.red('npx') + ' ' + chalk.white('antlis'),
  labelWork: chalk.white.bold('        Work:'),
  labelWeb: chalk.white.bold('         Web:'),
  labelLinkedIn: chalk.white.bold('    LinkedIn:'),
  labelTwitter: chalk.white.bold('     Twitter:'),
  labelGitHub: chalk.white.bold('      GitHub:'),
  labelCard: chalk.white.bold('        Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const onTheWeb = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               onTheWeb + newline +
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.magenta(boxen(output, options)))
