const inquirer = require("inquirer");

const managerQuestions = [
    {
        type: 'input',
        name: 'memberName',
        message: 'Please enter the name of the Manager of the team: ',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the Office Number to which the Manager belongs: ',
    },
    {
        type: 'input',
        name: 'memberMail',
        message: 'Please enter the Manager e-mail: ',
        validate: (managerMail) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerMail);
            if (!valid) {console.error(' ',"\x1b[41m",' <<<< Please enter a valid email >>>> ',"\x1b[0m")};
            return valid;
        }
    },
]


const internOrEngineer = [
    {
        type: 'list',
        name: 'memberRole',
        message: '\nPlease indicate if you want to add an Engineer or an Intern?\n',
        choices: ['Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'memberName',
        message: `Please enter the name of the new team member`,
    },
    {
        type: 'input',
        name: 'memberMail',
        message: `Please enter the e-mail of the new team member`,
        validate: (managerMail) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerMail);
            if (!valid) {console.error(' ',"\x1b[41m",' <<<< Please enter a valid email >>>> ',"\x1b[0m")};
            return valid;
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: `Pleasa enter engineer's GitHub account: `,
        when: (answers) => answers.memberRole == 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: `Pleasa enter intern's school: `,
        when: (answers) => answers.memberRole == 'Intern'
    },
    {
        type: 'list',
        name: 'addAnother',
        message: 'Do you want to add another team member?',
        choices: ['Yes', 'No'],
    }
]


const addTeamMember = async (answerCollector = []) => {
    const { addAnother, ...currentAnswers } = await inquirer.prompt(internOrEngineer)
    answerCollector = [...answerCollector, currentAnswers]
    return addAnother == 'Yes' ? addTeamMember(answerCollector) : answerCollector;        
}

const getManagerQuestions = async () => {
    const { ...managerAnswers } = await inquirer.prompt(managerQuestions)
    return managerAnswers
}


module.exports = {
    managerQuestions,
    internOrEngineer,
    addTeamMember,
    getManagerQuestions
}