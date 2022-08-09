import salirLogo from "../Styles/salir.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
    <h1>Hashbullita-Coin</h1><Link to="/"><img src={salirLogo} width="25px"></img></Link>
    </header>
  )
}

export default Header