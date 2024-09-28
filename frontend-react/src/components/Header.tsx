import EmailButton from "./EmailButton"

type NameProps = {
    name: string
    email: string
}

export default function Header(props: NameProps) {
    const { name, email } = props

    return (
        <nav>
            <h1 className="welcome">Velkommen tilbake {name}</h1>
            <EmailButton email={email}/>
        </nav> 
    )
}