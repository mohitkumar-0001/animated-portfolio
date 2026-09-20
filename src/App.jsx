import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Nav />
            <Home />
            <About />
            <Projects />
            <Education />
            <Resume />
            <Contact />
            <Footer />
        </>
    );
}

export default App;