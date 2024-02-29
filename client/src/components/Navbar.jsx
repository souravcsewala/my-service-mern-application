import { NavLink } from "react-router-dom"
import "./navbar.css"
import { useAuth } from "../store/auth"
const Navbar=()=>{
    const { isLoggedIn } = useAuth();
    console.log("login or not ", isLoggedIn);
    return(
        <>
        <header>
            <div className="container">
                <div className="logo">
                    <NavLink to="/">ENGINEER WALA SOURAV</NavLink>
                </div>
                <nav>
                    <ul>
                <li><NavLink to="" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/service" activeClassName="active">Services</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            
                </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

    export default Navbar