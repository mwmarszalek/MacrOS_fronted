import { NavLink } from "react-router-dom"
import ProgressBar from 'react-bootstrap/ProgressBar'

const NavBar = ({user}) => {

    // const logo = require("../logo.png")

    return(
        
        // <nav className="navbar-brand navbar-expand-lg bg-light">
        //     {user ? (
        //     <h2>{user.name}'s Navbar</h2>
        //     ): <h2> User's Navbar</h2>}
        //     <ul>
        //         <li>
        //             <NavLink to="/">Dashboard</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/journal">Journal</NavLink>
        //         </li>
        //     </ul>
        // </nav>

      

        <nav className="navbar sticky-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {user? (
                        <div>
                            <a className="navbar-brand" href="#">{user.name}'s macrOS</a>
                            {/* <img src={logo}></img> */}
                        </div>

                    ): <a className="navbar-brand" href="#">macrOS</a>}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/journal">Journal</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        
    )
}

export default NavBar;