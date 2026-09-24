/**
 * Represents a booking for a cinema seat.
 */
export class Booking {
  /**
   * @param {string} customerName - The name of the customer.
   * @param {object} screening - The screening connected to the booking.
   * @param {object} seat - The booked seat.
   */
  constructor(customerName, screening, seat) {
    this.customerName = customerName
    this.screening = screening
    this.seat = seat
    this.isActive = false
  }

  /**
   * Confirms the booking if the seat is available.
   *
   * @returns {boolean} True if the booking was confirmed.
   */
  confirm() {
    if (!this.seat.isAvailable()) {
      return false
    }

    this.seat.book()
    this.isActive = true
    return true
  }

  /**
   * Cancels the booking.
   *
   * @returns {boolean} True if the booking was cancelled.
   */
  cancel() {
    if (!this.isActive) {
      return false
    }

    this.seat.cancel()
    this.isActive = false
    return true
  }

  /**
   * Returns information about the booking.
   *
   * @returns {string} A readable booking summary.
   */
  getSummary() {
    return `${this.customerName} - ${this.screening.movieTitle} - ${this.seat.getSeatLabel()}`
  }
}
