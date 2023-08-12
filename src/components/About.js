import restaurant_photo from "../images/restaurant.jpg"

function About() {
    return (
        <section className="banner">
            <article>
                <h1>About Little Lemon</h1>
                <p>
                    Little Lemon is a charming
                    neighborhood bistro that
                    serves simple food and
                    classic cocktails in a
                    lively but casual
                    environment. The restaurant
                    features a locally-sourced
                    menu with daily specials.
                </p>
            </article>
            <img src={restaurant_photo} alt="Little Lemon Restaurant"/>
        </section>
    );
}

export default About;