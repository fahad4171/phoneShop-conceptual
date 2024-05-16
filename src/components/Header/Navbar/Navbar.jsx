import { NavLink } from "react-router-dom";
import Logos from "./Logos";



const Navbar = () => {
    return (
        <div>

            <nav className="flex justify-between items-center py-4 shadow px-2 bg-slate-300 rounded mt-5">
                <Logos></Logos>
                <ul className="font-semibold flex gap-5">
                    <li>
                        <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
                        }>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-pink-600 underline" : ""
                        }>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;