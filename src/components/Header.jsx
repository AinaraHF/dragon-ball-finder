import Logo from "../images/logo.png"

function Header(){

    return (
        <header>
            <h1>Buscador personajes Dragon Ball</h1>
            <img src={Logo} alt="bola Dragon Ball" width="100px" height="75px"/>
        </header>
    )
}

export default Header;