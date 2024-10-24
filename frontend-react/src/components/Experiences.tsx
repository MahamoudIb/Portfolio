import type { Experience as ExperienceProps } from "./types";

type ExperiencesProps = {
    experiences: ExperienceProps[]
}

export default function Experiences(props: ExperiencesProps) {
    const { experiences = [] } = props;

    return(
        <section>
            <h2>Erfaringer: </h2>
            {experiences.length === 0 ? (
            <h2 className="warning">Ingen erfaringer</h2>
          ) : null}
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