const fs = require('fs');

const questionsDB = require("./src/questions.js")
const classes = require("./lib/classes")
const template = require("./src/template")

function writeToFile(fileName, data) {
    fs.writeFile(__dirname+'/dist/'+fileName, data, (err) =>
    err ? console.log(err) : console.log('Team Successfully created!')
  );
}


const initailize = async () => {

    console.log("\n\x1b[46m",'   WELCOME TO THE TEAM PROFILE GENERATOR   ',"\x1b[0m")
    console.log("\nAs the first step, pleas provide the information of the Manager of the Team\n")

    const managerResults = await questionsDB.getManagerQuestions()
    const membersResults = await questionsDB.addTeamMember()
    membersResults.push(managerResults)

    classes.buildTeam(membersResults)

    const htmlText = template.fillCards()
    writeToFile('techTeam.html', htmlText)
}


initailize();


