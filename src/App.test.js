import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders choose date section', () => {
  const availableTimes = ["12:00"]
  render(<BookingForm availableTimes={availableTimes} />);
  const chooseDateElement = screen.getByText(/Choose Date/i);
  expect(chooseDateElement).toBeInTheDocument();
});
