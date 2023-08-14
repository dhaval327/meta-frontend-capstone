import { useState } from "react";

function BookingForm (props) {
    const [date, setDate] = useState({date: "", valid: true});
    const [time, setTime] = useState({time: props.availableTimes[0], valid: true});
    const [numGuests, setNumGuests] = useState({numGuests: 1, valid: true});
    const [occasion, setOccasion] = useState({occasion: "birthday", valid: true});

    const clearForm = () => {
        setDate({date: "", valid: true});
        setTime({time: "", valid: true});
        setNumGuests({numGuests: 1, valid: true});
        setOccasion({occasion: "", valid: true})
    }

    const validateForm = () => {
        setDate({...date, valid: date.date !== ""});
        setTime({...time, valid: time.time !== ""});
        setNumGuests({...numGuests, valid: numGuests.numGuests >= 1 && numGuests.numGuests <= 10});
        setOccasion({...occasion, valid: occasion.occasion !== ""});

        return date.date !== "" && time.time !== "" && (numGuests.numGuests >= 1 && numGuests.numGuests <= 10) && occasion.occasion !== "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            clearForm();
            props.submitForm(
                {
                    date: date.date,
                    time: time.time,
                    numGuests: numGuests.numGuests,
                    occasion: occasion.occasion
                }
            );
        }
    };

    const handleDateChange = (e) => {
        setDate({date: e.target.value, valid: e.target.value !== ""})
        props.dispatchTimes({ type: "TIME_CHANGE", date: e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reservation Form</h2>
            <label htmlFor="res-date">Choose date<sup>*</sup></label>
            <input type="date" id="res-date" value={date.date} onChange={handleDateChange}/>
            {!date.valid ? <p className="form-error">Please Enter a Date</p>: null}
            <label htmlFor="res-time">Choose time<sup>*</sup></label>
            <select id="res-time" value={time.time} onChange={e => setTime({time: e.target.value, valid: e.target.value !== ""})}>
                {props.availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>
            {!time.valid ? <p className="form-error">Please Enter a Valid Time</p>: null}
            <label htmlFor="guests">Number of guests<sup>*</sup></label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests.numGuests}
            onChange={e => setNumGuests({numGuests: e.target.value, valid: e.target.value >= 1 && e.target.value <= 10})}/>
            {!numGuests.valid ? <p className="form-error">Please Enter a Number of Guests between 1 and 10</p> : null}
            <label htmlFor="occasion">Occasion<sup>*</sup></label>
            <select id="occasion" value={occasion.occasion} onChange={e => setOccasion({occasion: e.target.value, valid: e.target.value !== ""})}>
                <option key="birthday">Birthday</option>
                <option key="anniversary">Anniversary</option>
            </select>
            {!occasion.valid ? <p className="form-error">Please Enter a Valid Occasion</p>: null}
            <input aria-label="On Click" type="submit" value="Make Your Reservation"/>
        </form>
    );
}

export default BookingForm;