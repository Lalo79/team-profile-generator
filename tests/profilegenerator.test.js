const inquirer = require("inquirer");
const questions = require("../src/questions");
const classes = require("../lib/classes")




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


describe('create Engineer Function',() => {

  it('Should create a new Engineer as an extionsion of an amployee', () => {

     const memberInfo = {
      name: 'Ingeniero',
      id: '002',
      email: 'inge@mail.com',
      role: 'Engineer',
      gitHub: 'gitInge'
    }

    expect(classes.createEngineer('002', memberInfo) instanceof classes.Employee).toEqual(true);
    console.log(received)


  })
})