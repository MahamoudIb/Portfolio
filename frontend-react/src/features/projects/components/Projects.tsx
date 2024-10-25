import ProjectForm from "./ProjectForm";
import { Project as ProjectProps, HandleOptions } from "../types"
import { PropsWithChildren } from "react";
import { formatDistance } from "date-fns";
import { nb } from "date-fns/locale";

type ProjectsProps = {
    projects: ProjectProps[],
    handleProjectOptions: HandleOptions;
}

export default function Projects(props:PropsWithChildren<ProjectsProps>) {
    const {projects, handleProjectOptions } = props;

    const onSubmit = (data: Omit<ProjectProps, 'id' |'publishedAt'>) => {
        return handleProjectOptions({action: "add", project: data});
    }

    const removeProject = (id: string) => {
        handleProjectOptions({action: "remove", id})
    }

    return (
        <section className="projects">
            <h1 className="projectTitle">Prosjekter</h1>
            <ProjectForm  onSubmit={onSubmit}/>
            {projects.length === 0 ? (
            <h2 className="warning">Ingen prosjekter</h2>
          ) : null}
            <ul className="allProjects">
                {projects.map((project) => (
                    <li key={project.id} className="projectItem">
                        <div className="clickable" onClick={() => window.location.href = project.git_Link}>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <p>Publisert: {formatDistance(project.publishedAt, new Date(), {
                                addSuffix: true,
                                includeSeconds: true,
                                locale: nb,
                        })}</p>
                        </div>
                        <button type="button" onClick={() => removeProject(project.id)}>Slett</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}