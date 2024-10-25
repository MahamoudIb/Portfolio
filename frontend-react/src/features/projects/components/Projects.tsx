import Project from "./Project";
import ProjectForm from "./ProjectForm";
import { Project as ProjectProps} from "../../../components/types"

type ProjectsProps = {
    projects: ProjectProps[],
    onAddProject: (project: Omit<ProjectProps, 'id'>) => void,
    onRemoveProject: (id: string) => void
}

export default function Projects(props: ProjectsProps) {
    const {projects, onAddProject, onRemoveProject} = props;

    return (
        <section className="projects">
            <h1 className="projectTitle">Prosjekter</h1>
            <ProjectForm  onAddProject={onAddProject}/>
            {projects.length === 0 ? (
            <h2 className="warning">Ingen prosjekter</h2>
          ) : null}
            <ul className="allProjects">
                {projects.map((project) => (
                    <Project key={project.id} onRemoveProject={onRemoveProject} id={project.id} git_Link={project.git_Link}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </Project>
                ))}
            </ul>
        </section>
    )
}