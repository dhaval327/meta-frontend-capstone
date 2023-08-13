import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./util/api";
import Navigation from "./Navigation";
import BookingForm from "./BookingForm";

function BookingPage () {
    const navigate = useNavigate();

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "TIME_CHANGE":
                return fetchAPI(new Date(Date.parse(action.date)))
            default:
                return
        }
    };

    const initializeTimes = () => {
        return fetchAPI(new Date());
    };

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmation");
        }
    }

    const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <Navigation/>
            <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} submitForm={submitForm}/>
        </>
    );
}

export default BookingPage;