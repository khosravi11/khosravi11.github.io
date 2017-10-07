var Basic = require('./basic.js');
var Cloze = require('./cloze.js');
var inquirer = require('inquirer');

if (process.argv[2] === 'cloze') {
  inquirer.prompt([
    {
      name: 'clozeStatement',
      message: 'Enter your Cloze Statement...'
    }, {
      name: 'fullText',
      message: 'Enter the Full Text...'
    }
  ]).then(function (answers) {
    var clozeInput = new Cloze(answers.fullText, answers.clozeStatement);
    console.log(clozeInput.text);
    console.log(clozeInput.cloze);
    console.log(clozeInput.partial());
  });
}
if (process.argv[2] === 'basic') {
  inquirer.prompt([
    {
      name: 'front',
      message: 'Enter the front side ...'
    }, {
      name: 'back',
      message: 'Enter the back side...'
    }
  ]).then(function (answers) {
    var basicInput = new Basic(answers.front, answers.back);
    console.log('Front: ' + basicInput.front);
    console.log('Back: ' + basicInput.back);
  });
}
