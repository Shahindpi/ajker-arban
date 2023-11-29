import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/images/ajker-arban-1.png';
// import Details from '../../src/components/pages/Details';



export default function RootLayout(){

    return(
        // <div className="root-layout">
        //     <header>
        //         <nav>
        //             <NavLink to="/">Home</NavLink>
        //             <NavLink to="/about">About</NavLink>
        //         </nav>
        //     </header>
        //     <main>
        //         <Outlet />
        //     </main>
        // </div>
        <div className="main-wrapper">
<section className="header-section">
                <div className="header-content flex-container">
                    <header>
                        <nav>
                            <div className="logo">
                                <NavLink to="/"><img src={logo} alt="Ajker Arban Logo" /></NavLink>
                            </div>
                            <div className="menu-bar mobile-hide">
                                <ul className="flex-container">
                                    <li><NavLink to="/details">Page Details</NavLink></li>
                                    <li><NavLink to="/list">List Page</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                    
                </div>
            </section>
        </div>
        
    )
}