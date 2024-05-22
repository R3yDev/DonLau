import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <header className="header">
            <h1 className="logo"> 
               <NavLink to="/DonLau&Cia">DonLau&Cia</NavLink>
            </h1>
            <nav>
                <ul className="menu">
                <li><NavLink to="/Destination">Destiantion</NavLink></li>
                <li><NavLink to="Delly">Delly</NavLink></li>
                <li><NavLink to="SleepyTime">SleepyTime</NavLink></li>
                <li><NavLink to="Lavandaria">Lavandaria</NavLink></li>
                <li><NavLink to="Barbers">Barbers</NavLink></li>
                </ul> 
            </nav>
        </header>
    )

}

