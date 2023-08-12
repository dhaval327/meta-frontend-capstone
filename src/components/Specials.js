import greekSalad from "../images/greek salad.jpg"
import bruchetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemon dessert.jpg"

function SpecialCard(props) {
    return (
        <article>
            <div className="card">
                <img src={props.itemImg} alt="greek salad"/>
                <h3>{props.item}</h3>
                <h3>{props.itemPrice}</h3>
                <p>
                    {props.itemDescription}
                </p>
                <a href="/" className="button"><b>Order Now</b></a>
            </div>
        </article>
    );
}

function Specials() {
    return (
        <section>
            <div className="section-title">
                <h2>Specials</h2>
                <a href="/" className="button"><b>Online Menu</b></a>
            </div>
            <section className="card-list">
                <SpecialCard item="Greek Salad"
                    itemImg={greekSalad}
                    itemPrice="$12.99"
                    itemDescription="Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua."
                />
                <SpecialCard item="Bruchetta"
                    itemImg={bruchetta}
                    itemPrice="$6.99"
                    itemDescription="Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua."
                />
                <SpecialCard item="Lemon Dessert"
                    itemImg={lemonDessert}
                    itemPrice="$12.99"
                    itemDescription="Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua."
                />
            </section>
        </section>
    );
}

export default Specials;