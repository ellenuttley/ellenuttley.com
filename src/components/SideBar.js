import {
	GiSunglasses,
	GiLightBulb,
	GiLaptop,
	GiMushroomHouse,
	GiPalette,
} from "react-icons/gi"
import MenuTab from "./MenuTab"
// GiSpellBook,
const SideBar = ({ setView, darkMode, toggleDarkMode }) => {
	return (
		<div className={`sidebar ${darkMode ? "dark" : ""}`}>
			<SideBarIcon
				icon={<GiMushroomHouse size="44" />}
				text="Homepage"
				handleClick={setView}
			/>
			<SideBarIcon
				icon={<GiSunglasses size="44" />}
				text="Read My CV"
				handleClick={setView}
			/>
			<SideBarIcon
				icon={<GiLaptop size="44" />}
				text="My Projects"
				handleClick={setView}
			/>
			{/* <SideBarIcon icon={<GiPalette size="44"/>} text = 'My React Components' handleClick={setView}/> */}
			<SideBarIcon
				icon={<GiLightBulb size="44" />}
				text="Toggle Dark Mode"
				handleClick={toggleDarkMode}
			/>
			<div className="fixed -right-3  hidden xl:block">
				<MenuTab />
			</div>
		</div>
	)
}

const SideBarIcon = ({ icon, text, handleClick }) => (
	<div
		className="sidebar-icon group"
		onClick={() => handleClick(text)}>
		{icon}
		<span className="sidebar-tooltip group-hover:scale-100">{text}</span>
	</div>
)

export default SideBar
