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
}
