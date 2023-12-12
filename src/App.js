import { useState } from 'react';
import SideBar from "./components/SideBar";
import AboutEllen from "./components/AboutEllen"
import SeeMyWork from './components/SeeMyWork';
import ReadAStory from './components/ReadAStory';

require('typeface-spectral')

export default function App() {   
  const [view, setView] = useState('AboutEllen')
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    // <div className="flex bg-glasses bg-blend-darken bg-fixed bg-primary h-screen scrolling-auto overflow-auto">
    //   <SideBar setView={setView}/>
    <div className={`flex bg-glasses bg-blend-darken bg-fixed bg-primary h-screen scrolling-auto overflow-auto ${darkMode ? 'dark' : ''}`}>
    <SideBar setView={setView} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {view === 'About Ellen' && <AboutEllen />}
      {view === 'See My Work' && <SeeMyWork />}
      {view === 'Read A Story' && <ReadAStory />}
    </div>
  );
}