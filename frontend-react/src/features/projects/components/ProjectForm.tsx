import { useState } from "react";
import { Project } from "../../../components/types"

type ProjectFormProps = {
    onAddProject: (project: Omit<Project, 'id'>) => void;
}

export default function ProjectForm(props: ProjectFormProps) {
    const {onAddProject } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [git_Link, setGit_Link] = useState("");
    const [contributors, setContributors] = useState<string[]>([]);
    const [languages, setLanguages] = useState<string[]>([]);



    const addToArray = (input: HTMLInputElement, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        const value = input.value.trim();
        if (value) {
            setter((prev) => [...prev, value]);
        input.value = '';
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !git_Link) return;
        onAddProject({
            title,
            description,
            git_Link,
            contributors,
            languages,
        })

        setTitle("");
        setDescription("");
        setGit_Link("");
        setContributors([]);
        setLanguages([]);
    };

    return (
        <form className="projectForm" onSubmit={handleSubmit}>
            <header className="makeProjectTitle">
                <h1>Legg til et nytt prosjekt</h1>
            </header>
            <label htmlFor="title">Tittel:</label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="git_link">GIT-URL link:</label>
            <input type="text" id="git_link" name="git_link" value={git_Link} onChange={(e) => setGit_Link(e.target.value)} />

            <label htmlFor="description">Beskrivelse:</label>
            <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label htmlFor="contributors">Bidragsytere:</label>
            <input type="text" id="contributors" name="contributors" />
            <ul>
                {contributors.map((contributor) => (
                    <li>
                        {contributor}
                    </li>
                ))}
            </ul>
            <button className="addButton" type="button" onClick={() => addToArray(document.getElementById('contributors') as HTMLInputElement, setContributors)}>
                Legg til
            </button>

            <label htmlFor="languages">Programmeringsspråk:</label>
            <input type="text" id="languages" name="languages" />
            <ul>
                {languages.map((language) => (
                    <li>
                        {language}
                    </li>
                ))}
            </ul>
            <button className="addButton" type="button" onClick={() => addToArray(document.getElementById('languages') as HTMLInputElement, setLanguages)}>
              Legg til
            </button>

            <div className="createCancelButtons">
                <button className="cancelButton" type="reset">Avbryt</button>
                <button className="createButton" type="submit">Opprett prosjekt</button>
            </div>
        </form>
    )   
}