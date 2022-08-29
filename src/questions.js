
const BgRed = "\x1b[41m";

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the Manager of the team: ',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the Office Number to which the Manager belongs: ',
    },
    {
        type: 'input',
        name: 'managerMail',
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
        message: 'Please indicate if you want to add an Engineer or an Intern?',
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



module.exports = {
    managerQuestions,
    internOrEngineer,
}