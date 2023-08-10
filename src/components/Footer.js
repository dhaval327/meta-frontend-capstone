import logo_green_lg from "../images/logo_green_lg.png"

function Footer () {
    return (
        <footer>
            <p>Footer</p>
            <img src={logo_green_lg} alt="Little Lemon logo"/>
            <div>
                <p>Doormat Navigation</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Log In</a></li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>
            <div>
                <p>Social Media</p>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;