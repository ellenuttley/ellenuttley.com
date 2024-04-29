import { useEffect, useState } from 'react';
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import AboutEllen from "./components/AboutEllen";
import SeeMyWork from './components/SeeMyWork';
import ReadAStory from './components/ReadAStory';
import MyDesign from './components/MyDesign';
import Homepage from './components/Homepage';


require('typeface-spectral')


export default function App() {   
  const [view, setView] = useState('Homepage')
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
    <div className="mainscreen">
    <SideBar setView={setView} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {view === 'Homepage' && <Homepage />}
      {view === 'Read My CV' && <AboutEllen />}
      {view === 'My Projects' && <SeeMyWork />}
      {view === 'Read A Story' && <ReadAStory />}
      {view === 'My React Components' && <MyDesign />}
      <Footer/>
    </div>
    </div>
  );
}