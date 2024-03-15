import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export default function Navbar(): JSX.Element {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return <div>Loading...</div>;
    }

    const { authenticated, logout } = authContext;

    return (
        <nav className="h-[80px] flex shadow-slate-900 shadow-lg justify-between items-center px-12 gap-3 mb-12">
            <h1 className="text-3xl">Order Management</h1>
            <div className="grow"></div>
            <h1 className="text-3xl hover:text-red-600 hover:scale-105 duration-300"> <NavLink to="/">Home</NavLink> </h1>
            <h1 className="text-3xl hover:text-red-600 hover:scale-105 duration-300"> <NavLink to="/products">Products</NavLink> </h1>
            {!authenticated && <h1 className="text-3xl hover:text-red-600 hover:scale-105 duration-300"> <NavLink to="/login">Login</NavLink> </h1>}
            {authenticated && <h1 className="text-3xl hover:text-red-600 hover:scale-105 duration-300" onClick={logout}>Logout</h1>}
        </nav>
    );
}