import { useEffect, useState } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";
import { Project } from "./components/types";
import Projects from "./features/projects/components/Projects";
import { ofetch } from "ofetch/node";



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

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const initializeData = async () => {
      try {
        console.time("fetching");
        console.log("fetching data");
        const projectsPromise = ofetch<{ data: Project[] }>(
          "http://localhost:3002/projects"
        );
        const [projects] = await Promise.all([projectsPromise]);
        console.log("data fetched", projects);
        setProjects(projects.data ?? []);
        console.log("data initialized");
        console.timeEnd("fetching");
      } catch (error) {
        console.error(error);
      }
    };

    initializeData();
  }, []);

  const onAddProject = async (project: Omit<Project, 'id'>) => {
    const currentProject = {id : crypto.randomUUID(), ...project}
    try{
      const createdProject = await ofetch("http://localhost:3002/projects", {
        method: 'POST',
        body: currentProject
      });
      setProjects((prev) => [...prev, currentProject]);
      console.log('Project added!:', createdProject.data);
    } catch (error){
      console.error(error);
    }
  };

  const onRemoveProject = (id: string) => {
    try{
       ofetch(`http://localhost:3002/projects/${id}`, {
        method: 'DELETE'
      });
        setProjects((prev) => prev.filter((project) => project.id != id));
        console.log('Project deleted!:');
    } catch(error){
      console.error(error);
    }
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
