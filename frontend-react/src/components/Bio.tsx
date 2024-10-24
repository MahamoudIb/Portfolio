import { useState } from "react";
import Experiences from "./Experiences";
import { Student } from "./types";
import ContactMe from "./ContactMe";

type bioProps = {
    student: Omit<Student, 'email'>
    totalProjects: number
};

export default function Bio(props: bioProps) {
    const { student, totalProjects } = props;

    const [personName, setPersonName] = useState("");
    const [message, setMessage] = useState("");

    const onReset = () => {
        setPersonName("");
        setMessage("");
    }

    const onAddMessage = (name: string, messageText: string) => {
        setPersonName(name);
        setMessage(messageText);

        //console.log(personName +": "+ message)
    }

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
            <Experiences experiences={student.experiences} />
            <h2>Antall prosjekter: {totalProjects}</h2>
            <section className="message">
                <h2>Send melding</h2>
                <ContactMe onAddMessage={onAddMessage}/>
                <pre>
                    {JSON.stringify(
                        { personName, message },
                        null,
                        2
                    )}
                </pre>
                <button onClick={onReset}>Reset</button>
            </section>
        </section>
    )

}