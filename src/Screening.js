
import { Seat } from './Seat.js'

/**
 * Represents a cinema screening with seats.
 */
export class Screening {
  #seats = []

  constructor(movieTitle, startTime, rows, seatsPerRow) {
    this.movieTitle = movieTitle
    this.startTime = startTime
    this.#createSeats(rows, seatsPerRow)
  }

  /**
   * Returns a copy of all seats.
   *
   * @returns {Seat[]} The screening seats.
   */
  get seats() {
    return [...this.#seats]
  }

  /**
   * Creates the seats for the screening.
   *
   * @param {number} rows - Number of rows.
   * @param {number} seatsPerRow - Seats in each row.
   */
  #createSeats(rows, seatsPerRow) {
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const rowLetter = String.fromCharCode(65 + rowIndex)

      for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
        const seat = new Seat(rowLetter, seatNumber)
        this.#seats.push(seat)
      }
    }
  }

  /**
   * Finds a seat by row and number.
   *
   * @param {string} row - The seat row.
   * @param {number} number - The seat number.
   * @returns {Seat|null} The matching seat or null.
   */
  getSeat(row, number) {
    for (const seat of this.#seats) {
      if (seat.row === row && seat.number === number) {
        return seat
      }
    }

    return null
  }

  /**
   * Returns all available seats.
   *
   * @returns {Seat[]} The available seats.
   */
  getAvailableSeats() {
    const availableSeats = []

    for (const seat of this.#seats) {
      if (seat.isAvailable()) {
        availableSeats.push(seat)
      }
    }

    return availableSeats
  }

  /**
   * Returns the number of booked seats.
   *
   * @returns {number} The booked seat count.
   */
  getBookedSeatCount() {
    let bookedSeats = 0

    for (const seat of this.#seats) {
      if (!seat.isAvailable()) {
        bookedSeats++
      }
    }

    return bookedSeats
  }
}
