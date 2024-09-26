import type { Experience as ExperienceProps } from "./types";

type ExperiencesProps = {
    experiences: ExperienceProps[]
}

export default function Experiences(props: ExperiencesProps) {
    const { experiences = [] } = props;

    return(
        <section>
            <h2>Erfaringer: </h2>
            <ul>
                {experiences.map((Experience) => (
                    <li key={Experience.id}>
                        <h3>{Experience.name}</h3>
                    </li>
                ))}
            </ul>
        </section>
    )
}