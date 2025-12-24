import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;