# Team Profile Generator  



## Table of Contents
- [Description](#description)
- [Installation](#installation)  
- [Usage](#usage)  
- [Tests](#tests)  
- [Questions](#questions)  
  


## Description  

Team Profile Generator is a simple app that allows the user to dynamically create a team structure using the terminal. The app requires the user to write the Manager Info. After having described the manager the user will be prompted to determine if the team has engineers or interns. The user can determine how many users and interns are in the team but there must me at least one Manager and one team member.  

![Screenshot of Team Profile Generator](./dist/images/App%20Screenshot.png)

## Walkthrough Video
See how the app works in te following link
[App Walk Through Video](https://watch.screencastify.com/v/eRg95h6ijLI3LRQJi5i8)  


## Installation  
    
  The Team Profile Generator have dependencies on two npm modules.
- Inquirer: Collects Information of team Members
- Jest: Runs the tests used to build the app

Because of the dependencies of the app, the user will need to exectue a npm install

## Usage  
    
- From the terminal execude node index.js

![Inquirer Screen Shot](./dist/images/Inquirer%20Screen%20Shot.png)


- Inquirer program will be executed prompting a series fo questions
- Fill the information corresponding to the Manager. The manager information is mandatory in the Team Profile Manager
- Application will ask if you want to add either an intern or an Enginer
- Fill the information of the engineer/intern
- After filling the information described in previous step, the app will ask if the user wants to add another member
- While the user keeps selecting that another member is going to be added, the inquirer will keep asking for the information of the member that is wanted to be added.
- The user can add as many engineers or interns as she/he wants.
 

## Tests  
    
  Several tests were developed to verify the performance of the information received by the classes, the new isntances created, and how the new instances are passing info to build the HTML file.

Tests simulate an object as would be received fron the Inquirer app

They were applied 3 tests for each of the classes extended from the employee class.
- A new instance is correctly created.
- A test of a method in the corresponding instance.
- A test to verify that information from the origin constructor "employee" is properly passed.

![Jest Tests Screen Shot](./dist/images/Tests%20Screen%20Shot.png)


## Questions
Please refer to my GitHub profile for more information: https://github.com/Lalo79  
If you have questions, you can reach me via e-mail: eduardo@mail.com   

