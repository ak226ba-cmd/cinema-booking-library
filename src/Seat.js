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
}
