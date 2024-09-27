import Experiences from "./Experiences";
import { Student } from "./types";

type bioProps = {
    student: Student
    totalProjects: number
};

export default function Bio(props: bioProps) {
    const { student, totalProjects } = props;

    return(
        <section className="profile">
            <img className="profilePicture" src={student.profileImg} alt="Profilbilde" />
            <h2>Navn: {student.name}</h2>
            <h2>Fødselsdato: {student.birthDate.toLocaleString('nb-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</h2>
            <h2>Utdanning: {student.degree}</h2>
            <h2>Studiepoeng: {student.points}</h2>
            <h2>Email: {student.email}</h2>
            <Experiences experiences={student.experiences} />
            <h2>Total projects: {totalProjects}</h2>
        </section>
    )

}