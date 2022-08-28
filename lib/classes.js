class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail(){
        
    }

    getRole(){

    }


}


class Manager extends Employee {
    constructor(officeNumber)

    getRole() {

    }
}


class Engineer extends Employee {
    constructor(github)

    getGithub() {

    }

    getRole() {

    }


}


class Intern extends Employee {
    constructor(school)

    getSchool() {

    }

    getRole() {

    }


}












module.exports = {
    Employee,
    Manager,
    Engineer
}