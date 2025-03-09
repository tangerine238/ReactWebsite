import styles from './App.module.css'
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/navbar/navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import './index.css';


function App() {


  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>;

}

export default App
