import { Seat } from './Seat.js'

/**
 * Represents a cinema screening with seats.
 */
export class Screening {
  /**
   * @param {string} movieTitle - The title of the movie.
   * @param {string} startTime - The start time of the screening.
   * @param {number} rows - Number of seat rows.
   * @param {number} seatsPerRow - Number of seats in each row.
   */
  constructor(movieTitle, startTime, rows, seatsPerRow) {
    this.movieTitle = movieTitle
    this.startTime = startTime
    this.seats = []

    this.createSeats(rows, seatsPerRow)
  }

  /**
   * Creates the seats for the screening.
   *
   * @param {number} rows - Number of rows.
   * @param {number} seatsPerRow - Number of seats in each row.
   */
  createSeats(rows, seatsPerRow) {
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const rowLetter = String.fromCharCode(65 + rowIndex)

      for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
        const seat = new Seat(rowLetter, seatNumber)
        this.seats.push(seat)
      }
    }
  }

  /**
   * Finds a seat by row and number.
   *
   * @param {string} row - The seat row.
   * @param {number} number - The seat number.
   * @returns {Seat|null} The matching seat or null if not found.
   */
  getSeat(row, number) {
    for (const seat of this.seats) {
      if (seat.row === row && seat.number === number) {
        return seat
      }
    }

    return null
  }

  /**
   * Returns all available seats.
   *
   * @returns {Seat[]} An array of available seats.
   */
  getAvailableSeats() {
    const availableSeats = []

    for (const seat of this.seats) {
      if (seat.isAvailable()) {
        availableSeats.push(seat)
      }
    }

    return availableSeats
  }

  /**
   * Returns the number of booked seats.
   *
   * @returns {number} The number of booked seats.
   */
  getBookedSeatCount() {
    let bookedSeats = 0

    for (const seat of this.seats) {
      if (!seat.isAvailable()) {
        bookedSeats++
      }
    }

    return bookedSeats
  }
}
