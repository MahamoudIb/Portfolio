import Experiences from "./Experiences";
import { Student } from "./types";

type bioProps = {
    student: Student
};

export default function Bio(props: bioProps) {
    const { student } = props;

    return(
        <section className="profile">
            <img className="profilePicture" src={student.profileImg} alt="Profilbilde" />
            <h1>Navn: {student.name}</h1>
            <h1>Fødselsdato: {student.birthDate.toLocaleString('nb-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</h1>
            <h1>Utdanning: {student.degree}</h1>
            <h1>Studiepoeng: {student.points}</h1>
            <h1>Email: {student.email}</h1>
            <Experiences experiences={student.experiences} />
        </section>
    )

}