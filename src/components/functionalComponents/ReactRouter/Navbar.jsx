import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <div className="bg-blue-600 p-4">
            <ul className="flex justify-center space-x-4 text-white">
                <li>
                    <NavLink to="/" className={({isActive})=>isActive ? "font-bold border p-2 border-white" : "hover:text-blue-300"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>isActive ? "font-bold border p-2 border-white" : "hover:text-blue-300"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>isActive ? "font-bold border p-2 border-white" : "hover:text-blue-300"}>Contact</NavLink>
                </li>

            </ul>
        </div>
    )
}
export default Navbar;