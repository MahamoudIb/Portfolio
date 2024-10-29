import { PropsWithChildren } from "react";
import Bio from "./components/Bio";
import Header from "./components/Header";



const student = {
  profileImg: "./src/assets/image.png",
  name: "Mahamoud Ibrahim",
  degree: "Dataingeniør",
  birthDate: new Date(2000, 0, 9),
  points: 180,
  email: "student@hiof.no",
  experiences: [
    { id: "dwdw", name: "BreadOS for Bread Inc." },
    { id: "dgev", name: "website.com for Big Company Inc." },
    { id: "dgedv", name: ".NET API for you... Inc." }
  ]
}

type AppProps = PropsWithChildren;

function App(props: AppProps) {
  const { children } = props;
  return (
    <>
    <Header name={student.name} email={student.email}/>
    <div className="portfolio">
      <Bio student={student} totalProjects={0} />
      { children }
    </div>
    </>
  )
}

export default App
