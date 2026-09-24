import { Seat } from '../src/Seat.js'

const seat = new Seat('A', 5)

console.log('Seat label:', seat.getSeatLabel())
console.log('Available:', seat.isAvailable())

console.log('Booking seat:', seat.book())
console.log('Available after booking:', seat.isAvailable())

console.log('Cancel booking:', seat.cancel())
console.log('Available after cancel:', seat.isAvailable())
