import { useState } from "react";

type ContactMeProp = {
    onAddMessage: (person: string, message: string) => void;
}

export default function ContactMe(props: ContactMeProp) {
    const { onAddMessage } = props;

    //NB: Dette kan bli mer abstrakt, men dette er for å utføre oppgaven for nå
    const [personValid, setPersonValid] = useState(false);
    const [personIsDirty, setPersonIsDirty] = useState(false);
    const [personIsTouched, setPersonIsTouched] = useState(false);

    const [messageValid, setMessageValid] = useState(false);
    const [messageIsDirty, setMessageIsDirty] = useState(false);
    const [messageIsTouched, setMessageIsTouched] = useState(false);
  
  
    const [person, setPerson] = useState("");
    const [message, setMessage] = useState("");

    const validatePersonInput = (title: string) => {
        if (personIsTouched && personIsDirty) {
            setPersonValid(title.trim().length > 2);
        }
    };

    const validateMessageInput = (title: string) => {
        if (messageIsTouched && messageIsDirty) {
            setMessageValid(title.trim().length > 19);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(!messageValid || !personValid) return

        setPersonValid(false);
        setMessageIsDirty(false);
        setMessageIsTouched(false);

        setPersonValid(false);
        setPersonIsDirty(false);
        setPersonIsTouched(false);
        console.log(person+": "+message)
        onAddMessage(person, message);
        setPerson("");
        setMessage("");
    };

    const updatePerson = (event: React.FormEvent) => {
        const input = event.target as HTMLInputElement | null;
        if (!input) return;
        setPersonIsDirty(true);
        setPerson(input.value);
    };

    const updateMessage = (event: React.FormEvent) => {
        const input = event.target as HTMLInputElement | null;
        if (!input) return;
        setMessageIsDirty(true);
        setMessage(input.value);
    };

    return (
    <form className="messageForm" onSubmit={handleSubmit}>
        <label htmlFor="Person">
            Navn:
            <input
                className="messager"
                type="text"
                id="person"
                name="person"
                onChange={updatePerson}
                onFocus={() => {
                setPersonIsTouched(true);
                }}
                onBlur={() => {
                validatePersonInput(person);
                }}
                value={person}
            />
            {!personValid && personIsDirty ? (
                <p className="warning">Navnet må være minst 3 tegn langt</p>
            ) : null}
            </label>

            <label htmlFor="Message">
            Meldingen:
            <textarea
                id="message"
                name="message"
                onChange={updateMessage}
                onFocus={() => {
                console.log("onFocus");
                setMessageIsTouched(true);
                }}
                onBlur={() => {
                console.log("onBlur");
                validateMessageInput(message);
                }}
                value={message}
            />
            {!messageValid && messageIsDirty ? (
                <p className="warning">Meldingen må være minst 20 tegn langt</p>
            ) : null}
            </label>
        <button type="submit">Legg til</button>
    </form>
    )
}