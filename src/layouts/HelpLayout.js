import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout(){
    return(
        <div className="help-layout">
            <h2>Get Help</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <nav>
                <NavLink to="faq">View Faq</NavLink>
                <NavLink to="contact">View Contact</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}