import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ScrollIndicator from "./components/ScrollIndicator"

const App = () => {
  return (
    <>
    <ScrollIndicator />
    <Navbar />
    <div className="pt-20">
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
    </>
  )
}
export default App