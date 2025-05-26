import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import {  CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <CssBaseline/>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={ <Hero/>  } />
            <Route path="*" element={ <Hero/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}  />
            <Route path="/projects" element={ <Projects/>} />
            <Route path="/skills" element={ <Skills/> } />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
