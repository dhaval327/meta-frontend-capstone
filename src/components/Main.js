import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage/>}></Route>
                    <Route path='/booking' element={<BookingPage/>}></Route>
                    <Route path='/confirmation' element={<ConfirmedBooking/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Main;