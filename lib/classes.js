const teamMembers = [];

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

        !element.memberRole ? createManager('001', element)
            : element.memberRole == 'Engineer' ? createEngineer(id, element)
            : createIntern(id, element)
        
        counter ++
    })
    console.log('these are the team members',teamMembers)
}   



const createEngineer = (id, engineerData) => {
    const newMemmber = new Engineer(engineerData.memberName, id, engineerData.memberMail, 'Engineer' ,engineerData.gitHub)
    teamMembers.push(newMemmber)
} 

const createIntern = (id, internData) => {
    const newMemmber = new Intern(internData.memberName, id, internData.memberMail, 'Intern' ,internData.school)
    teamMembers.push(newMemmber)
}

const createManager = (id, managerData) => {
    const newMemmber = new Manager(managerData.managerName, id, managerData.managerMail, 'Manager' ,managerData.officeNumber)
    teamMembers.push(newMemmber)
} 


module.exports = {
    teamMembers,
    Employee,
    Manager,
    Engineer,
    Intern,
    buildTeam
}

