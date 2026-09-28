import { Seat } from '../src/Seat.js'
import { Screening } from '../src/Screening.js'
import { Booking } from '../src/Booking.js'
import { PriceCalculator } from '../src/PriceCalculator.js'

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

console.log('--------------------')

// Test the Booking class.
const bookingSeat = screening.getSeat('A', 1)
const booking = new Booking('Ahmed', screening, bookingSeat)

console.log('Booking summary:', booking.getSummary())
console.log('Confirm booking:', booking.confirm())
console.log('Booking active:', booking.isActive)
console.log('Seat available after booking:', bookingSeat.isAvailable())

console.log('Cancel booking:', booking.cancel())
console.log('Booking active after cancel:', booking.isActive)
console.log('Seat available after cancel:', bookingSeat.isAvailable())

console.log('--------------------')

// Test the PriceCalculator class.
const priceCalculator = new PriceCalculator()

console.log('Adult standard:', priceCalculator.calculatePrice(120, 30, 'standard'))
console.log('Child standard:', priceCalculator.calculatePrice(120, 10, 'standard'))
console.log('Senior standard:', priceCalculator.calculatePrice(120, 70, 'standard'))
console.log('Adult premium:', priceCalculator.calculatePrice(120, 30, 'premium'))
console.log('Child has discount:', priceCalculator.hasAgeDiscount(10))
console.log('Adult has discount:', priceCalculator.hasAgeDiscount(30))
