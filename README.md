# Cinema Booking Library

A JavaScript library for managing cinema seats, screenings, bookings and ticket prices.

## Features

- Create cinema seats
- Book and cancel seats
- Create screenings
- Find available seats
- Manage bookings
- Calculate ticket prices
- Apply age discounts

## Requirements

- Node.js
- JavaScript ES Modules

No external dependencies are required.

## Usage

Import the classes from the public interface:

```js
import {
  Seat,
  Screening,
  Booking,
  PriceCalculator,
  Cinema
} from './src/index.js'
```

## Example

```js
import {
  Screening,
  Booking
} from './src/index.js'

const screening = new Screening('Interstellar', '18:00', 3, 5)

const seat = screening.getSeat('A', 1)

const booking = new Booking('Ahmed', screening, seat)

booking.confirm()

console.log(booking.getSummary())
```

## Testing

Run the test application with:

```bash
npm test
```

or:

```bash
node test-app/test.js
```

The tests print `PASS` or `FAIL` for each test.

## License

This project is licensed under the MIT License.