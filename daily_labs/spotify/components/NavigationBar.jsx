import BurgerNavi from "../public/images/menu.png"

const NavigationBar = () => {
    return (
        <nav className="universal-navi">
            <h3>ANSTRUM LABS</h3>
            <img src={BurgerNavi} />
        </nav>
    )
}

export default NavigationBar;
