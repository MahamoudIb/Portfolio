import { type PropsWithChildren } from "react";
import { Project as ProjectProps } from "./types";

export default function Project( 
    props: PropsWithChildren<ProjectProps & {
      onRemoveProject: (id: string) => void;
    }>,
    ) {
    const {id, onRemoveProject, children} = props
    
    return (
        <>
        <li className="projectItem">
            {children}
        </li>
        <button type="button" onClick={() => onRemoveProject(id)}>Slett</button>
        </>
    )
}