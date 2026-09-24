/**
 * Represents a seat in a cinema.
 */
export class Seat {
  /**
   * @param {string} row - The seat row.
   * @param {number} number - The seat number.
   * @param {string} [type='standard'] - The seat type.
   */
  constructor(row, number, type = 'standard') {
    this.row = row
    this.number = number
    this.type = type
    this.isBooked = false
  }

  /**
   * Books the seat if it is available.
   *
   * @returns {boolean} True if the seat was booked.
   */
  book() {
    if (this.isBooked) {
      return false
    }

    this.isBooked = true
    return true
  }

  /**
   * Cancels the booking.
   *
   * @returns {boolean} True if the booking was cancelled.
   */
  cancel() {
    if (!this.isBooked) {
      return false
    }

    this.isBooked = false
    return true
  }

  /**
   * @returns {boolean} True if the seat is available.
   */
  isAvailable() {
    return !this.isBooked
  }

  /**
   * @returns {string} The seat label, for example "A5".
   */
  getSeatLabel() {
    return `${this.row}${this.number}`
  }
}
