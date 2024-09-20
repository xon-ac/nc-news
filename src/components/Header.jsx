import { Link } from "react-router-dom";
import logo from "../Images/banner.png"


export default function Header() {
  return (
    <Link to={'/'}><h1 className="header"><img src={logo} alt="whats news?" class="banner"/></h1></Link>
  )
}