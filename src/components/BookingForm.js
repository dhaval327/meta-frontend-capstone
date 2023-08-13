import { useState } from "react";

function BookingForm (props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numGuests, setNumGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const clearForm = () => {
        setDate("");
        setTime("");
        setNumGuests("");
        setOccasion("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        props.submitForm(
            {
                date: date,
                time: time,
                numGuests: numGuests,
                occasion: occasion
            }
        );
    };

    const handleDateChange = (e) => {
        setDate(e.target.value)
        props.dispatchTimes({ type: "TIME_CHANGE", date: e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {props.availableTimes.map(t => <option>{t}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests} onChange={e => setNumGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}

export default BookingForm;