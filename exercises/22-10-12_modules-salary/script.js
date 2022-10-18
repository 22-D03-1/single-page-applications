import * as salaryModules from "./modules/salary.js"
import averageSalary from "./modules/calculations.js"

function updateResults(){

    const checkedCompany = document.querySelector('input[name="company"]:checked')
    const checkedRole = document.querySelector('input[name="role"]:checked')

    if (!checkedCompany || !checkedRole) {
        return
    }

    const role = checkedRole.value;
    const company = checkedCompany.value;
    const salary = salaryModules.salaryData.find(s => s.role == role && s.company == company)["salary"]
    const averageSalaryByRole = averageSalary(salaryModules.getDataByRole(role))
    const averageSalaryByCompany = averageSalary(salaryModules.getDataByCompany(company))
    const industryAverageSalary = averageSalary(salaryModules.salaryData)

    document.querySelector('#salarySelected').innerText = `The salary for ${role}s at ${company} is \$${salary}`;
    document.querySelector('#salaryAverageByRole').innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
    document.querySelector('#salaryAverageByCompany').innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
    document.querySelector('#salaryAverageIndustry').innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}

function renderInputButtons(labels, groupName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);

    let header = document.createElement('h3');
    header.innerText = `Select a ${groupName}`;
    container.appendChild(header);

    labels.forEach(label => {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');
    
        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', groupName);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);
    
        let labelElement = document.createElement('label');
        labelElement.setAttribute('for', label);
        labelElement.innerText = label;
        divElement.appendChild(labelElement);
    
        inputElement.addEventListener('click', updateResults);
    
        container.appendChild(divElement);
    });
    
    document.querySelector('main').prepend(container);
}

renderInputButtons(salaryModules.getCompanies(), 'company');
renderInputButtons(salaryModules.getRoles(), 'role');