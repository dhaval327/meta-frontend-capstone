import logo from "../images/Logo.svg"

function Navigation () {
    return (
        <nav>
            <img src={logo} alt="Little Lemon Logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Log In</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;