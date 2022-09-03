let teamMembers = []

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {return this.name}
    getId() {return this.id}
    getEmail() {return this.email}
    getRole() {}
}

class Manager extends Employee {
    constructor(name, id, mail, role, officeNumber) {
        super(name, id, mail)
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getRole() {return this.role}
    getOfficeNumber() {return this.officeNumber}
}

class Engineer extends Employee {
    constructor(name, id, mail, role, github) {
        super(name, id, mail)
        this.role = role;
        this.gitHub = github;
    }

    getGithub() {return this.gitHub}
    getRole() {return this.role}
}

class Intern extends Employee {
    constructor(name, id, mail, role, school) {
        super(name, id, mail)
        this.role = role;
        this.school = school;
    }

    getSchool() {return this.school}
    getRole() {return  this.role}
}

const buildTeam = (array) => {
    counter = 2;

    array.forEach(element => {
        id = counter.toString().padStart(3, '0')

        !element.memberRole ? teamMembers.push(createManager('001', element))
            : element.memberRole == 'Engineer' ? teamMembers.push(createEngineer(id, element))
            : teamMembers.push(createIntern(id, element))
        
        counter ++
    })
    
    return teamMembers;
}   


const createEngineer = (id, engineerData) => {
    return new Engineer(engineerData.memberName, id, engineerData.memberMail, 'Engineer' ,engineerData.gitHub)
} 

const createIntern = (id, internData) => {
    return new Intern(internData.memberName, id, internData.memberMail, 'Intern' ,internData.school)
}

const createManager = (id, managerData) => {
    return new Manager(managerData.memberName, id, managerData.memberMail, 'Manager' ,managerData.officeNumber)
} 


module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern,
    buildTeam,
    createEngineer,
    createIntern,
    createManager,
    teamMembers
}

