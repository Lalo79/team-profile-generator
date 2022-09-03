const inquirer = require("inquirer");
const questions = require("../src/questions");
const classes = require("../lib/classes")

describe('Test Instances and their methods and properties',() => {

  const memberInfo = {
    memberName: 'Member Name',
    id: '002',
    memberMail: 'inge@mail.com',
    role: 'Engineer',
    gitHub: 'gitEngineer',
    school: 'University',
    officeNumber:'1000'
  }
  const newEngineer = classes.createEngineer('000', memberInfo)

  console.log(newEngineer)

  const newIntern = classes.createIntern('000', memberInfo)
  const newManager = classes.createManager('000',memberInfo)


  // TEST ENGINEER CLASS
  it('Should create a new instance of Engineer ', () => {
    expect(newEngineer instanceof classes.Engineer).toEqual(true);
  })

  it('Should show Engineer role on executing getGitHub() method', () => {
    expect(newEngineer.getGithub()).toBe('gitEngineer');
  })

  it('Should pass the property name of the class Employee from which Engineer is extended\n', () => {
    expect(newEngineer.name).toBe('Member Name');
  })


  // TEST INTERN CLASS
  it('Should create a new instance of Intern ', () => {
    expect(newIntern instanceof classes.Intern).toEqual(true);
  })

  it('Should show Intern School on executing getSchool() method', () => {
    console.log(newIntern.getSchool())
    expect(newIntern.getSchool()).toBe('University');
  })

  it('Should pass the property name of the class Employee from which Intern is extended\n', () => {
    expect(newIntern.name).toBe('Member Name');
  })


  // TEST MANAGER CLASS
  it('Should create a new instance of Manager ', () => {
    expect(newManager instanceof classes.Manager).toEqual(true);
  })

  it('Should show Manager Office number on executing getOfficeNumber() method', () => {
    expect(newManager.getOfficeNumber()).toBe('1000');
  })

  it('Should pass the property name of the class Employee from which Manager is extended\n', () => {
    expect(newManager.name).toBe('Member Name');
  })


})





/*

jest.mock('inquirer', () => {
  return { prompt: jest.fn() };
});

// jest.mock('inquirer'),

describe('59495121', () => {
  // afterEach(() => {
  //   jest.resetAllMocks();
  // });
  it('should pass', async () => {
    inquirer.prompt.mockResolvedValue('Correct Answer');
    const actual = await questions.getManagerQuestions();
    console.log(actual)
    expect(actual).toBe('Correct Answer');
  });
});
\

*/