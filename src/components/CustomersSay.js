import personPhoto from "../images/Mario and Adrian A.jpg"

function TestimonialCard() {
    return (
        <article>
            <div className="card">
                <p>Rating</p>
                <img src={personPhoto} alt="greek salad"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </article>
    );
}

function CustomersSay() {
    return (
        <section>
            <div className="section-title">
                <h2>Testimonials</h2>
            </div>
            <section className="card-list testimonial-list ">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </section>
        </section>
    );
}

export default CustomersSay;