# Cinema Booking Library

A JavaScript library for managing cinema screenings, seats, bookings and ticket prices. It can be integrated into Node.js applications using ES modules.

## Features

- Create cinema seats and screenings.
- Check seat availability.
- Book and cancel seats.
- Manage screenings and active bookings.
- Calculate ticket prices with age discounts.
- Configure additional prices for different seat types.
- Access the library through a single public interface.

## Requirements

- Node.js with ES module support.
- npm.

The library does not require any external dependencies.

## Installation

To use the library in another Node.js application, open a terminal in your application's folder and run:

```bash
npm install git+https://github.com/ak226ba-cmd/cinema-booking-library.git
```

Make sure your application supports ES modules. You can enable them by adding this property to your application's `package.json`:

```json
{
  "type": "module"
}
```

After installation, import the classes using the package name:

```javascript
import {
  Seat,
  Screening,
  Booking,
  PriceCalculator,
  Cinema
} from 'cinema-booking-library'
```

The module is installed directly from its GitHub repository and does not need to be copied manually into the application.

## Getting Started

The following example shows how to create a screening and book a seat:

```javascript
import {
  Cinema,
  Screening,
  Booking
} from 'cinema-booking-library'

const cinema = new Cinema('My Cinema')

const screening = new Screening(
  'Interstellar',
  '18:00',
  3,
  5
)

cinema.addScreening(screening)

const seat = screening.getSeat('A', 1)
const booking = new Booking('Alex', screening, seat)

if (booking.confirm()) {
  cinema.addBooking(booking)
  console.log(booking.getSummary())
}
```

The example creates a cinema with one screening containing 15 seats. It then books seat A1 for Alex.

## Public API

### Seat

Represents a seat in a cinema.

```javascript
const seat = new Seat('A', 5)
```

Methods:

- `getSeatLabel()` – Returns the seat label, for example A5.
- `isAvailable()` – Checks whether the seat is available.
- `book()` – Books the seat if available.
- `cancel()` – Cancels the seat booking.

A seat can also have a type, such as `standard` or `premium`.

### Screening

Represents a movie screening.

```javascript
const screening = new Screening(
  'Interstellar',
  '18:00',
  3,
  5
)
```

Methods:

- `getSeat(row, number)` – Finds a specific seat.
- `getAvailableSeats()` – Returns available seats.
- `getBookedSeatCount()` – Returns the number of booked seats.

The `seats` getter provides an array of the screening's seats.

### Booking

Manages a customer's seat booking.

```javascript
const booking = new Booking(
  'Alex',
  screening,
  seat
)
```

Methods:

- `confirm()` – Confirms the booking when the seat is available.
- `cancel()` – Cancels an active booking.
- `getSummary()` – Returns a readable booking summary.

The `isActive` property indicates whether the booking is active.

### PriceCalculator

Calculates ticket prices using a base price, customer age and seat type.

The application provides the base price and optional seat surcharges.

```javascript
const calculator = new PriceCalculator({
  premium: 50
})

const price = calculator.calculatePrice(
  120,
  30,
  'premium'
)

console.log(price) // 170
```

The example uses a base price of 120 and a Premium surcharge of 50.

The surcharge can be changed without modifying the library:

```javascript
const calculator = new PriceCalculator({
  premium: 25
})
```

The current age discount rules are:

- Children under 12 receive a 50% discount.
- Seniors aged 65 or older receive a 30% discount.
- Other customers pay the regular base price.

Methods:

- `calculatePrice(basePrice, age, seatType)` – Calculates the ticket price.
- `hasAgeDiscount(age)` – Checks whether an age discount applies.

If no surcharge is configured for a seat type, the additional charge is zero.

### Cinema

Manages screenings and bookings.

```javascript
const cinema = new Cinema('My Cinema')
```

Methods:

- `addScreening(screening)` – Adds a screening.
- `findScreeningsByMovie(movieTitle)` – Finds matching screenings.
- `addBooking(booking)` – Adds a confirmed booking.
- `getActiveBookings()` – Returns active bookings.
- `getScreeningCount()` – Returns the number of screenings.

## Project Structure

```text
cinema-booking-library/
├── src/
│   ├── Seat.js
│   ├── Screening.js
│   ├── Booking.js
│   ├── PriceCalculator.js
│   ├── Cinema.js
│   └── index.js
├── test-app/
│   └── test.js
├── README.md
├── TEST_REPORT.md
└── package.json
```

## Testing

Clone the repository:

```bash
git clone https://github.com/ak226ba-cmd/cinema-booking-library.git
```

Enter the project directory:

```bash
cd cinema-booking-library
```

Run the test application:

```bash
npm test
```

The tests cover seat management, screening management, booking confirmation, booking cancellation, pricing and cinema operations.

Each test prints `PASS` or `FAIL` to the terminal.

## Limitations

The library stores screenings and bookings in memory. It does not include a database, payment processing or a graphical user interface.

Applications using the library must implement these features separately if needed.

## License

This project is licensed under the MIT License.