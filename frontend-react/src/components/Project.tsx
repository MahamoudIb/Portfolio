import { type PropsWithChildren } from "react";

type ProjectProps = {
    id: string,
    git_Link: string,
    onRemoveProject: (id: string) => void;
}


export default function Project(props: PropsWithChildren<ProjectProps>) {
    const {id, git_Link, onRemoveProject, children} = props
    
    return (
        <li className="projectItem">
            <div className="clickable" onClick={() => window.location.href = git_Link}>
            {children}
            </div>
            <button type="button" onClick={() => onRemoveProject(id)}>Slett</button>
        </li>
    )
}