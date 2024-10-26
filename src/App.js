
import './App.css';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
import PhotoAndRole from './Components/PhotoAndRole';
import Skills from './Components/Skills';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
function App() {
  return (<>
  <Navbar />
  <PhotoAndRole />
  <Skills />
  <Certifications />
  <Projects />
  <Contact />
  <Footer />
 </>

  );
}

export default App;
