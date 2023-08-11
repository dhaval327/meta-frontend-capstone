import personPhoto from "../images/Mario and Adrian A.jpg"

function TestimonialCard() {
    return (
        <article>
            <p>Rating</p>
            <img src={personPhoto} alt="greek salad"/>
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
        </article>
    );
}

function CustomersSay() {
    return (
        <section>
            <div className="section-title">
                <h1>Testimonials</h1>
            </div>
            <section>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </section>
        </section>
    );
}

export default CustomersSay;