import { GiSunglasses, GiLightBulb, GiLaptop,  GiMushroomHouse} from 'react-icons/gi'
// GiSpellBook,
const SideBar = ({ setView, darkMode, toggleDarkMode }) => {

    return (
        <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
            <SideBarIcon icon={<GiMushroomHouse size="44"/>} text = 'Homepage' handleClick={setView}/>
            <SideBarIcon icon={<GiSunglasses size="44"/>} text = 'About Ellen' handleClick={setView}/>
            <SideBarIcon icon={<GiLaptop size="44"/>} text = 'See My Work' handleClick={setView}/>
            {/* <SideBarIcon icon={<GiSpellBook size="44"/>} text = 'Read A Story' handleClick={setView}/> */}
            <SideBarIcon icon={<GiLightBulb size="44"/>} text = 'Dark Mode' handleClick={toggleDarkMode}/>
        </div>
    );

};

const SideBarIcon = ({ icon, text, handleClick }) => (
    <div className="sidebar-icon group" onClick={() => handleClick(text)}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
        {text}
        </span>
    </div>
);

export default SideBar;