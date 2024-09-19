#!/usr/bin/env node
// In the file 0-console.js, create a function named
// display Message that prints in STDOUT the string argument.

function displayMessage(arg) {
  process.stdout.write(`${arg}\n`);
}

module.exports = displayMessage;
