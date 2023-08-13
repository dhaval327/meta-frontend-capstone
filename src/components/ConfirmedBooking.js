import React from "react";
import Navigation from "./Navigation";

function ConfirmedBooking() {
    return (
        <React.Fragment>
            <Navigation/>
            <section className="banner">
                <article>
                    <h2>Your booking is confirmed!</h2>
                    <p>
                        See you soon!
                    </p>
                    <a href="/" className="button"><b>Home</b></a>
                </article>
            </section>
        </React.Fragment>
    );
}

export default ConfirmedBooking;