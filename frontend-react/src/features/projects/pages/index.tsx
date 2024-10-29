import Projects from "../components/Projects";
import useProjects from "../hooks/useProjects";
import type { HandleOptions } from "../types";


export default function ProjectPage() {
    const { add, remove, status, data, error } = useProjects();
    const projects = data;

    const handleProjectOptions: HandleOptions = (props) => {
        const { action } = props;

        switch (action) {
          case "add":
            add(props.project);
            break;
          case "remove":
            remove(props.id);
            break;
          default:
            break;
        };
    }

    //if (status.loading) return <p>Prosjektene laster ...</p>;
    if (status.error) return <p className="error">{error}</p>;

   return (
    <>
    {console.log(status)}
    {status.loading? <p>Prosjektene laster ...</p> : null }
    <Projects projects={projects} handleProjectOptions={handleProjectOptions}/>
    </>
   ) 
}