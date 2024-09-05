import './style.css';

let projects = [];
let contributors = [];
let languages = [];

fetch('/projects.json')
    .then(response => {
        if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();   

    })
    .then(data => {
        projects = data;
        viewProjects();
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);   
    });

const viewProjects = () => {
    let allProjects = document.querySelector('.allProjects')
    for (let index = 0; index < projects.length; index++) {
        let project = document.createElement('div');
        project.className = 'projectItem';
        project.addEventListener('click', (e) => {
            window.location.href = projects[index].git_Link;
        });

        let projectTitleDiv = document.createElement('div');
        projectTitleDiv.className = 'projectItemTitle';


        let projectDescriptionDiv = document.createElement('div')
        projectDescriptionDiv.className = 'projectItemDescription'

        let projectTitle = document.createElement('h1')
        let projectDescription = document.createElement('p')

        projectTitle.innerHTML = projects[index].title;
        projectDescription.innerHTML = projects[index].description;

        projectTitleDiv.appendChild(projectTitle);
        projectDescriptionDiv.appendChild(projectDescription)
        project.appendChild(projectTitleDiv);
        project.appendChild(projectDescriptionDiv);
        allProjects.appendChild(project);
    }
}

const contributorInput = document.getElementById('contributors');
const languageInput = document.getElementById('languages');
const addContributorBtn = document.querySelector('#addButtonContributor');
const addLanguageBtn = document.querySelector('#addButtonLanguages');


function addToArray(input, array) {
  const value = input.value.trim();
  if (value) {
    array.push(value);
    input.value = '';
  }
}

addContributorBtn.addEventListener('click', () => {
  addToArray(contributorInput, contributors);
});

addLanguageBtn.addEventListener('click', () => {
  addToArray(languageInput, languages);
});

const createButton = document.querySelector('.createButton');
createButton.addEventListener('click', (event) => {
  event.preventDefault();

  const data = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    git_link: document.getElementById('git_link').value,
    contributors,
    languages
  };

  projects.push(data)
});

const cancleButton = document.querySelector('.cancelButton')
cancleButton.addEventListener('click', (e) => {
    languages = [];
    contributors = [];
});
