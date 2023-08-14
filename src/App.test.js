import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders choose date section', () => {
  const availableTimes = ["12:00"]
  render(<BookingForm availableTimes={availableTimes} />);
  const chooseDateElement = screen.getByText(/Choose Date/i);
  expect(chooseDateElement).toBeInTheDocument();
});

test('renders choose time section', () => {
  const availableTimes = ["12:00"]
  render(<BookingForm availableTimes={availableTimes} />);
  const chooseDateElement = screen.getByText(/Choose Time/i);
  expect(chooseDateElement).toBeInTheDocument();
});

test('renders occasion section', () => {
  const availableTimes = ["12:00"]
  render(<BookingForm availableTimes={availableTimes} />);
  const chooseDateElement = screen.getByText(/Occasion/i);
  expect(chooseDateElement).toBeInTheDocument();
});

test('renders number of guests section', () => {
  const availableTimes = ["12:00"]
  render(<BookingForm availableTimes={availableTimes} />);
  const chooseDateElement = screen.getByText(/Number of guests/i);
  expect(chooseDateElement).toBeInTheDocument();
});

test('checks if form can be submitted with valid input', () => {
  const availableTimes = ["12:00"]
  const submitForm = jest.fn();
  const dispatchTimes = jest.fn()
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatchTimes={dispatchTimes}/>);

  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, {target: {value: "2023-08-15"}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(submitForm).toHaveBeenCalled();
});

test('checks if form can be submitted with invalid guests input', () => {
  const availableTimes = ["12:00"]
  const submitForm = jest.fn();
  const dispatchTimes = jest.fn()
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatchTimes={dispatchTimes}/>);

  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, {target: {value: "2023-08-15"}});

  const guestsPicker = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestsPicker, {target: {value: -1}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
});

test('checks if form can be submitted with invalid date input', () => {
  const availableTimes = ["12:00"]
  const submitForm = jest.fn();
  const dispatchTimes = jest.fn()
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatchTimes={dispatchTimes}/>);

  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, {target: {value: ""}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
});

test('checks if form can be submitted with invalid occasion input', () => {
  const availableTimes = ["12:00"]
  const submitForm = jest.fn();
  const dispatchTimes = jest.fn()
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatchTimes={dispatchTimes}/>);

  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, {target: {value: "2023-08-15"}});

  const occasionSelector = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionSelector, {target: {value: ""}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
});

test('checks if form can be submitted with invalid time input', () => {
  const availableTimes = ["12:00"]
  const submitForm = jest.fn();
  const dispatchTimes = jest.fn()
  render(<BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatchTimes={dispatchTimes}/>);

  const timeSelector = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeSelector, {target: {value: ""}});

  const occasionSelector = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionSelector, {target: {value: ""}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
});
