const inquirer = require("inquirer");
const questionsDB = require("./src/questions.js")


const addTeamMember = async (answerCollector = []) => {
    const { addAnother, ...currentAnswers } = await inquirer.prompt(questionsDB.internOrEngineer)
    const answerArray = [...answerCollector, currentAnswers]
    return addAnother == 'Yes' ? addTeamMember(answerArray) : answerArray;        
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

    console.log('sssss',membersResults)
        
}


initailize();