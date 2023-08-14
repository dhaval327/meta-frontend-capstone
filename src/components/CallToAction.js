import restaurantFood from "../images/restauranfood.jpg"

function CallToAction () {
    return (
        <header className="banner">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned
                    Mediterranean restaurant
                    focused on traditional
                    recipes served with a
                    twist.
                </p>
                <a aria-label="On Click" href="/booking" className="button"><b>Reserve a Table</b></a>
            </article>
            <img src={restaurantFood} alt="Little Lemon Restaurant"/>
        </header>
    );
}

export default CallToAction;