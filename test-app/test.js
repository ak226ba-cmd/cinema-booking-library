import { Seat } from '../src/Seat.js'
import { Screening } from '../src/Screening.js'

// Test the Seat class.
const seat = new Seat('A', 5)

console.log('Seat label:', seat.getSeatLabel())
console.log('Available:', seat.isAvailable())

console.log('Booking seat:', seat.book())
console.log('Available after booking:', seat.isAvailable())

console.log('Cancel booking:', seat.cancel())
console.log('Available after cancel:', seat.isAvailable())

console.log('--------------------')

// Test the Screening class.
const screening = new Screening('Interstellar', '18:00', 3, 5)

console.log('Movie:', screening.movieTitle)
console.log('Start time:', screening.startTime)
console.log('Total seats:', screening.seats.length)

const selectedSeat = screening.getSeat('B', 3)

console.log('Selected seat:', selectedSeat.getSeatLabel())
console.log('Available seats:', screening.getAvailableSeats().length)

selectedSeat.book()

console.log('Available seats after booking:', screening.getAvailableSeats().length)
console.log('Booked seats:', screening.getBookedSeatCount())
