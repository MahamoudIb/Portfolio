import { type PropsWithChildren } from "react";

type ProjectProps = {
    id: string,
    onRemoveProject: (id: string) => void;
}


export default function Project(props: PropsWithChildren<ProjectProps>) {
    const {id, onRemoveProject, children} = props
    
    return (
        <li className="projectItem">
            {children}
            <button type="button" onClick={() => onRemoveProject(id)}>Slett</button>
        </li>
    )
}