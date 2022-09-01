const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

const questionsDB = require("./src/questions.js")
const classes = require("./lib/classes")
const template = require("./src/template")


function writeToFile(fileName, data) {
    fs.writeFile(__dirname+'/dist/'+fileName, data, (err) =>
    err ? console.log(err) : console.log('Team Successfully created!')
  );
}


const addTeamMember = async (answerCollector = []) => {
    const { addAnother, ...currentAnswers } = await inquirer.prompt(questionsDB.internOrEngineer)
    answerCollector = [...answerCollector, currentAnswers]
    return addAnother == 'Yes' ? addTeamMember(answerCollector) : answerCollector;        
}

const managerQuestions = async () => {
    const { ...managerAnswers } = await inquirer.prompt(questionsDB.managerQuestions)
    return managerAnswers
}


const initailize = async (results = []) => {

    console.log("\n\x1b[46m",'   WELCOME TO THE TEAM PROFILE GENERATOR   ',"\x1b[0m")
    console.log("\nAs the first step, pleas provide the information of the Manager of the Team\n")

    const managerResults = await managerQuestions()
    const membersResults = await addTeamMember()
    membersResults.push(managerResults)

    // console.log('sssss',membersResults)

    classes.buildTeam(membersResults)

    const htmlText = template.fillCards()
    writeToFile('techTeam.html', htmlText)
        
}


initailize();