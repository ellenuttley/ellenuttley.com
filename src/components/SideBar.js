import { GiSunglasses, GiTicTacToe, GiLaptop, GiSpellBook, GiMushroomHouse} from 'react-icons/gi'

const SideBar = ({ setView }) => {
    return (
        <div className="sidebar">
            <SideBarIcon icon={<GiMushroomHouse size="44"/>} text = 'Homepage' handleClick={setView}/>
            <SideBarIcon icon={<GiSunglasses size="44"/>} text = 'About Ellen' handleClick={setView}/>
            <SideBarIcon icon={<GiLaptop size="44"/>} text = 'See My Work' handleClick={setView}/>
            <SideBarIcon icon={<GiTicTacToe size="44"/>} text = 'Play Tic-Tac-Toe' handleClick={setView}/>
            <SideBarIcon icon={<GiSpellBook size="44"/>} text = 'Read A Story' handleClick={setView}/>
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