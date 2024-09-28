import { useState } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import { Project } from "./components/types";
import Projects from "./components/Projects";

const projectList = [
  {
    id: "1",
    title: "Software engineering prosjekt backend",
    description: "Backend system som håndterer all data fra og til frontend.",
    git_Link: "https://github.com/software-gruppe1/vanlig_template",
    contributors: [
      "MahamoudIb",
      "AyubAliA",
      "Fredrbr",
      "Villa25698"
    ],
    languages: [
      "Java"
    ]
  },
  {
    id: "2",
    title: "Software engineering prosjekt frontend",
    description: "I dette prosjektet, så lagde vi en turist nettside, der du kan bestille turistattraksjoner ved hjelp av publiserte annonser og lage din egene annonser.",
    git_Link: "https://github.com/Villa25698/Software_engineer-g1",
    contributors: [
      "MahamoudIb",
      "Villa25698"
    ],
    languages: [
      "Vue",
      "HTML",
      "JavaScript"
    ]
  },
  {
    id: "3",
    title: ".NET og Rammeverk prosjekt: Havn simulasjon API",
    description: "I dette prosjektet, så lagde vi en .NET API som håndterer en realistisk simulasjon av en havn. Du kan bruke API-et i ditt eget prosjekt.",
    git_Link: "https://github.com/NET-og-Rammeverk-gruppe-MBFS/HavnAPI",
    contributors: [
      "MahamoudIb",
      "Villa25698",
      "Fredrbr"
    ],
    languages: [
      "C#"
    ]
  },
  {
    id: "4",
    title: "Software engineering prosjekt backend",
    description: "Backend system som håndterer all data fra og til frontend.",
    git_Link: "https://github.com/software-gruppe1/vanlig_template",
    contributors: [
      "MahamoudIb",
      "AyubAliA",
      "Fredrbr",
      "Villa25698"
    ],
    languages: [
      "Java"
    ]
  },
  {
    id: "5",
    title: "Software engineering prosjekt frontend",
    description: "I dette prosjektet, så lagde vi en turist nettside, der du kan bestille turistattraksjoner ved hjelp av publiserte annonser og lage din egene annonser.",
    git_Link: "https://github.com/Villa25698/Software_engineer-g1",
    contributors: [
      "MahamoudIb",
      "Villa25698"
    ],
    languages: [
      "Vue",
      "HTML",
      "JavaScript"
    ]
  },
  {
    id: "6",
    title: ".NET og Rammeverk prosjekt: Havn simulasjon API",
    description: "I dette prosjektet, så lagde vi en .NET API som håndterer en realistisk simulasjon av en havn. Du kan bruke API-et i ditt eget prosjekt.",
    git_Link: "https://github.com/NET-og-Rammeverk-gruppe-MBFS/HavnAPI",
    contributors: [
      "MahamoudIb",
      "Villa25698",
      "Fredrbr"
    ],
    languages: [
      "C#"
    ]
  },
  {
    id: "7",
    title: "Software engineering prosjekt backend",
    description: "Backend system som håndterer all data fra og til frontend.",
    git_Link: "https://github.com/software-gruppe1/vanlig_template",
    contributors: [
      "MahamoudIb",
      "AyubAliA",
      "Fredrbr",
      "Villa25698"
    ],
    languages: [
      "Java"
    ]
  },
  {
    id: "8",
    title: "Software engineering prosjekt frontend",
    description: "I dette prosjektet, så lagde vi en turist nettside, der du kan bestille turistattraksjoner ved hjelp av publiserte annonser og lage din egene annonser.",
    git_Link: "https://github.com/Villa25698/Software_engineer-g1",
    contributors: [
      "MahamoudIb",
      "Villa25698"
    ],
    languages: [
      "Vue",
      "HTML",
      "JavaScript"
    ]
  },
  {
    id: "9",
    title: ".NET og Rammeverk prosjekt: Havn simulasjon API",
    description: "I dette prosjektet, så lagde vi en .NET API som håndterer en realistisk simulasjon av en havn. Du kan bruke API-et i ditt eget prosjekt.",
    git_Link: "https://github.com/NET-og-Rammeverk-gruppe-MBFS/HavnAPI",
    contributors: [
      "MahamoudIb",
      "Villa25698",
      "Fredrbr"
    ],
    languages: [
      "C#"
    ]
  }
]

const student = {
  profileImg: "./src/assets/image.png",
  name: "Mahamoud Ibrahim",
  degree: "Dataingeniør",
  birthDate: new Date(2000, 0, 9),
  points: 180,
  email: "student@hiof.no",
  experiences: [
    { id: "dwdw", name: "BreadOS for Bread Inc." },
    { id: "dgev", name: "website.com for Big Company Inc." },
    { id: "dgedv", name: ".NET API for you... Inc." }
  ]
}


function App() {

  const [projects, setProjects] = useState<Project[]>(projectList ?? []);

  const onAddProject = (project: Omit<Project, 'id'>) => {
    setProjects((prev) => [...prev, {id : crypto.randomUUID(), ...project}]);
    console.log(projects)
  };

  const onRemoveProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id != id));
  };


  return (
    <>
    <Header name={student.name} email={student.email}/>
    <div className="portfolio">
      <Bio student={student} totalProjects={projects.length} />
      <Projects projects={projects} onAddProject={onAddProject} onRemoveProject={onRemoveProject}/>
    </div>
    </>
  )
}

export default App
