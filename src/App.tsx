import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
// import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Container} from "./components/Container.tsx";
import {About} from "./layout/sections/about/About.tsx";

function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Main/>
                <About/>
                <Skills/>
                <Projects/>
                {/*<Testimony/>*/}
                <Contacts/>
                <Footer/>
            </Container>
        </div>
    )
}

export default App

