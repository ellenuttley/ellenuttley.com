import { useState } from 'react';
import SideBar from "./components/SideBar";
import AboutEllen from "./components/AboutEllen"
import SeeMyWork from './components/SeeMyWork';
import PlayTicTacToe from './components/PlayTicTacToe';
import ReadAStory from './components/ReadAStory';

export default function App() {   
  const [view, setView] = useState('AboutEllen')
  
  return (
    <div className="flex bg-glasses bg-blend-darken bg-fixed bg-primary h-screen scrolling-auto 
overflow-auto">
      <SideBar setView={setView}/>
      {view === 'About Ellen' && <AboutEllen />}
      {view === 'See My Work' && <SeeMyWork />}
      {view === 'Play Tic-Tac-Toe' && <PlayTicTacToe />}
      {view === 'Read A Story' && <ReadAStory />}
    </div>
  );
}