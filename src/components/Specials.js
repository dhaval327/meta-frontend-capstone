import greekSalad from "../images/greek salad.jpg"

function SpecialCard() {
    return (
        <article>
            <img src={greekSalad} alt="greek salad"/>
            <h3>Greek Salad</h3>
            <h3>$12.99</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="/">Order Now</a>
        </article>
    );
}

function Specials() {
    return (
        <section>
            <div className="section-title">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>
            <section>
                <SpecialCard/>
                <SpecialCard/>
                <SpecialCard/>
            </section>
        </section>
    );
}

export default Specials;