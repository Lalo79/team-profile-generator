const { teamMembers } = require("../lib/classes");

let ManagerCard = ``;
let engineerCards = ``;
let internCards = ``;


const fillCards = () => {
    
    teamMembers.forEach(member => {

        member.role == 'Engineer' ? fillEngineerCard(member)
            : member.role == 'Intern' ? fillInternCard(member)
            : fillManagerCard(member)

    })

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles/styles.css">


    <title>My Tech Team</title>
</head>
<body>
    <div class="jumbotron d-flex justify-content-center">
        <h1 class="display-3">My Tech Team</h1>
    </div>

    <!-- Container for manager -->
    <div class="container w-100 d-flex justify-content-center">
        ${ManagerCard}
    </div>
    
    <!-- Container for Engineer and Interns -->
    <div class="row main-div">

        <div class="col-6 category-div">
            <div class="row row-cols-2">
                ${engineerCards}
            </div>
        </div>
        
        <div class="col-6 category-div" >
            <div class="row row-cols-2">
                    ${internCards}
            </div>
        </div>

    </div>


    
</body>
</html>
`
}



const fillManagerCard = (member) => {
    
    return ManagerCard += `
<div class="manager-card card mb-3">
<div class="row no-gutters">
    <div class="col-md-2 card-img  bg-light icon-space">
        <img src="./images/manager.png" class="icon card-img" alt="Manager">
    </div>
    <div class="col-md-9">
        <div class="card-body">
            <h3 class="card-title">${member.name}</h3>
            <p class="lead">Manager</p>
            <p class="card-text">Employee ID: ${member.id}</p>
            <p class="card-text">e-mail: <a href="mailto:">${member.email}</a></p>
            <p class="card-text">Office Number: ${member.officeNumber}</p>
        </div>
    </div>
</div>
</div>
`
}


const fillEngineerCard = (member) => {

    return engineerCards +=`
            <div class="col">
                <div class="card m-2" style="width: 18rem;">
                    <div class="icon-space d-flex justify-content-center eng-div">
                        <img src="./images/engineerBk.png" class="icon-2 card-img-top" alt="...">
                    </div>
                    <div class="card-body eng-div">
                        <h4 class="card-title mb-3">${member.name}</h4>
                        <p class="card-text lead">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item py-2">Employee ID: ${member.id}</li>
                        <li class="list-group-item py-2">e-mail <a href="mailto:">${member.email}</a></li>
                        <li class="list-group-item py-2">Github: <a href="https://github.com/${member.gitHub}"><small>https://github.com/${member.gitHub}</small></a></li>
                    </ul>
                </div>
            </div>
`
}


const fillInternCard = (member) => {
    
    return internCards +=`
            <div class="col">
                <div class="card m-2" style="width: 18rem;">
                    <div class="icon-space d-flex  justify-content-center int-div">
                        <img src="./images/internBk.png" class="icon-2 card-img-top" alt="...">
                    </div>
                    <div class="card-body int-div">
                        <h4 class="card-title mb-3">${member.name}</h4>
                        <p class="card-text lead">Intern</p>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item py-2">Employee ID: ${member.id}</li>
                            <li class="list-group-item py-2">e-mail <a href="mailto:">${member.email}</a></li>
                            <li class="list-group-item py-2">School: ${member.school}</li>
                        </ul>
                </div>
            </div>
`
}


module.exports = {
    fillCards
}