import Navigation from './Navigation';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import About from './About';
import Footer from './Footer';

function Homepage () {
    return (
        <div>
            <Navigation/>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Homepage;