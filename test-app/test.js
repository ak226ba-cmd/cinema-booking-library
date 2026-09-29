import {
  Seat,
  Screening,
  Booking,
  PriceCalculator,
  Cinema
} from '../src/index.js'

console.log('=== SEAT TESTS ===')

// Test the Seat class.
const seat = new Seat('A', 5)

if (seat.getSeatLabel() === 'A5') {
  console.log('PASS - Seat label is A5')
} else {
  console.log('FAIL - Seat label:', seat.getSeatLabel())
}

if (seat.isAvailable()) {
  console.log('PASS - New seat is available')
} else {
  console.log('FAIL - New seat should be available')
}

if (seat.book()) {
  console.log('PASS - Seat can be booked')
} else {
  console.log('FAIL - Seat could not be booked')
}

if (!seat.isAvailable()) {
  console.log('PASS - Booked seat is not available')
} else {
  console.log('FAIL - Booked seat should not be available')
}

if (seat.cancel()) {
  console.log('PASS - Booking can be cancelled')
} else {
  console.log('FAIL - Booking could not be cancelled')
}

if (seat.isAvailable()) {
  console.log('PASS - Seat is available after cancellation')
} else {
  console.log('FAIL - Seat should be available after cancellation')
}

console.log('--------------------')
console.log('=== SCREENING TESTS ===')

// Test the Screening class.
const screening = new Screening('Interstellar', '18:00', 3, 5)

if (screening.movieTitle === 'Interstellar') {
  console.log('PASS - Movie title is correct')
} else {
  console.log('FAIL - Wrong movie title')
}

if (screening.seats.length === 15) {
  console.log('PASS - Screening has 15 seats')
} else {
  console.log('FAIL - Number of seats:', screening.seats.length)
}

const selectedSeat = screening.getSeat('B', 3)

if (selectedSeat && selectedSeat.getSeatLabel() === 'B3') {
  console.log('PASS - Seat B3 was found')
} else {
  console.log('FAIL - Seat B3 was not found')
}

if (screening.getAvailableSeats().length === 15) {
  console.log('PASS - All 15 seats are initially available')
} else {
  console.log(
    'FAIL - Available seats:',
    screening.getAvailableSeats().length
  )
}

selectedSeat.book()

if (screening.getAvailableSeats().length === 14) {
  console.log('PASS - 14 seats remain after booking')
} else {
  console.log(
    'FAIL - Available seats after booking:',
    screening.getAvailableSeats().length
  )
}

if (screening.getBookedSeatCount() === 1) {
  console.log('PASS - One seat is booked')
} else {
  console.log('FAIL - Booked seats:', screening.getBookedSeatCount())
}

console.log('--------------------')
console.log('=== BOOKING TESTS ===')

// Test the Booking class.
const bookingSeat = screening.getSeat('A', 1)
const booking = new Booking('Ahmed', screening, bookingSeat)

if (booking.getSummary() === 'Ahmed - Interstellar - A1') {
  console.log('PASS - Booking summary is correct')
} else {
  console.log('FAIL - Booking summary:', booking.getSummary())
}

if (booking.confirm()) {
  console.log('PASS - Booking was confirmed')
} else {
  console.log('FAIL - Booking could not be confirmed')
}

if (booking.isActive) {
  console.log('PASS - Booking is active')
} else {
  console.log('FAIL - Booking should be active')
}

if (!bookingSeat.isAvailable()) {
  console.log('PASS - Booked seat is unavailable')
} else {
  console.log('FAIL - Booked seat should be unavailable')
}

if (booking.cancel()) {
  console.log('PASS - Booking was cancelled')
} else {
  console.log('FAIL - Booking could not be cancelled')
}

if (!booking.isActive && bookingSeat.isAvailable()) {
  console.log('PASS - Booking is inactive and seat is available')
} else {
  console.log('FAIL - Cancellation did not work correctly')
}

console.log('--------------------')
console.log('=== PRICE CALCULATOR TESTS ===')

// Test the PriceCalculator class.
const priceCalculator = new PriceCalculator()

if (priceCalculator.calculatePrice(120, 30, 'standard') === 120) {
  console.log('PASS - Adult standard price is 120')
} else {
  console.log('FAIL - Adult standard price')
}

if (priceCalculator.calculatePrice(120, 10, 'standard') === 60) {
  console.log('PASS - Child price is 60')
} else {
  console.log('FAIL - Child price')
}

if (priceCalculator.calculatePrice(120, 70, 'standard') === 84) {
  console.log('PASS - Senior price is 84')
} else {
  console.log('FAIL - Senior price')
}

if (priceCalculator.calculatePrice(120, 30, 'premium') === 170) {
  console.log('PASS - Premium price is 170')
} else {
  console.log('FAIL - Premium price')
}

if (priceCalculator.hasAgeDiscount(10)) {
  console.log('PASS - Child receives age discount')
} else {
  console.log('FAIL - Child should receive age discount')
}

if (!priceCalculator.hasAgeDiscount(30)) {
  console.log('PASS - Adult does not receive age discount')
} else {
  console.log('FAIL - Adult should not receive age discount')
}

console.log('--------------------')
console.log('=== CINEMA TESTS ===')

// Test the Cinema class.
const cinema = new Cinema('Filmstaden')

if (cinema.addScreening(screening)) {
  console.log('PASS - Screening was added')
} else {
  console.log('FAIL - Screening could not be added')
}

if (cinema.getScreeningCount() === 1) {
  console.log('PASS - Cinema has one screening')
} else {
  console.log('FAIL - Screening count:', cinema.getScreeningCount())
}

if (cinema.findScreeningsByMovie('Interstellar').length === 1) {
  console.log('PASS - Interstellar screening was found')
} else {
  console.log('FAIL - Interstellar screening was not found')
}

// Create and confirm a new booking.
const cinemaSeat = screening.getSeat('C', 2)
const cinemaBooking = new Booking('Sara', screening, cinemaSeat)

cinemaBooking.confirm()

if (cinema.addBooking(cinemaBooking)) {
  console.log('PASS - Booking was added to cinema')
} else {
  console.log('FAIL - Booking could not be added to cinema')
}

if (cinema.getActiveBookings().length === 1) {
  console.log('PASS - Cinema has one active booking')
} else {
  console.log(
    'FAIL - Active bookings:',
    cinema.getActiveBookings().length
  )
}

console.log('--------------------')
console.log('All tests completed.')