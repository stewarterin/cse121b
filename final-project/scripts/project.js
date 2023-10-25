let ancestorList = [];
const tbody = document.getElementById('tbody');

const displayPerson = (ancestors) => {
    ancestors.forEach(ancestor => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell('name');
        cell1.textContent = ancestor.name;
        const cell2 = document.createElement('info');
        cell2.textContent = `${ancestor.birthYear} | ${ancestor.birthPlace}`;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    });
}

const getData = async () => {
    const response = await fetch("https://run.mocky.io/v3/477fe61b-d2e1-429c-b4df-460254c4e585");
    ancestorList = await response.json();
    displayPerson(ancestorList);
}

function displayFlag() {
    var selection = document.querySelector('input[name="select"]:checked').value;
    var flag = document.getElementById('flag-img');

    if (selection === 'All') {
        flag.src = 'images/globe.svg';
    } else if (selection === 'Canada') {
        flag.src = 'images/canada.svg';
    } else if (selection === 'Denmark') {
        flag.src = 'images/denmark.svg';
    } else if (selection === 'England') {
        flag.src = 'images/england.svg';
    } else if (selection === 'Germany') {
        flag.src = 'images/germany.svg';
    } else if (selection === 'Ireland') {
        flag.src = 'images/ireland.svg';
    } else if (selection === 'Netherlands') {
        flag.src = 'images/netherlands.svg';
    } else if (selection === 'US') {
        flag.src = 'images/us.svg';
    }
}

const reset = () => {
    tbody.innerHTML = '';
}

function sortBy(ancestors) {
    var selection = document.querySelector('input[name="select"]:checked').value;
    reset();
    if (selection === 'All') {
        displayPerson(ancestors);
    } else if (selection === 'Canada') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("Canada")));
    } else if (selection === 'Denmark') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("Denmark")));
    } else if (selection === 'England') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("England")));
    } else if (selection === 'Germany') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("Germany")));
    } else if (selection === 'Ireland') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("Ireland")));
    } else if (selection === 'Netherlands') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("Netherlands")));
    } else if (selection === 'US') {
        displayPerson(ancestors.filter(ancestor => ancestor.birthPlace.includes("United States")));
    }
}


var countrySelect = document.getElementsByName('select');
countrySelect.forEach(country => country.addEventListener('change', displayFlag));  
countrySelect.forEach(country => country.addEventListener('change', () => sortBy(ancestorList)));

getData();