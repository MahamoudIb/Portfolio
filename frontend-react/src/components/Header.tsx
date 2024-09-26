
type NameProps = {
    name: string
}

export default function Header(props: NameProps) {
    const { name } = props

    return (
        <nav>
            <h1 className="welcome">Velkommen tilbake {name}</h1>
        </nav> 
    )
}