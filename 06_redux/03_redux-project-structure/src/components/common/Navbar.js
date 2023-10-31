import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pokemons">pokemons List</NavLink></li>
            </ul>

        </div>
    )
}
export default Navbar;