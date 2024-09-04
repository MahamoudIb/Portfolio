import './style.css'

let projects = [];

const fetchProjects = async () => {
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
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);   
    });
};

const viewProjects = () => {
    let allProjects = document.querySelector('.allProjects')
    for (let index = 0; index < projects.length; index++) {
        let project = document.createElement('div');
        project.className = 'projectItem';
        project.addEventListener('click', () => {
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



fetchProjects();
