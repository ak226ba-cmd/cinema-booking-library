import { Cinema } from './Cinema.js'

/**
 * Produces statistics about screenings, seats and bookings.
 */
export class CinemaStatistics {
  #cinema

  /**
   * @param {Cinema} cinema - The cinema to analyze.
   */
  constructor(cinema) {
    if (!(cinema instanceof Cinema)) {
      throw new TypeError('Argument must be a Cinema instance')
    }

    this.#cinema = cinema
  }

  /**
   * Returns statistics for every screening.
   *
   * @returns {object[]} Statistics for each screening.
   */
  getScreeningStatistics() {
    return this.#cinema.screenings.map(screening =>
      this.#createScreeningStatistics(screening)
    )
  }

  /**
   * Returns total seats and booking activity for the cinema.
   *
   * @returns {object} Overall cinema statistics.
   */
  getOverallStatistics() {
    const screenings = this.getScreeningStatistics()
    let totalSeats = 0
    let bookedSeats = 0

    for (const screening of screenings) {
      totalSeats += screening.totalSeats
      bookedSeats += screening.bookedSeats
    }

    return {
      screeningCount: screenings.length,
      totalSeats,
      bookedSeats,
      availableSeats: totalSeats - bookedSeats,
      occupancyPercentage: this.#calculateOccupancyPercentage(bookedSeats, totalSeats),
      recordedBookings: this.#cinema.bookings.length,
      activeBookings: this.#cinema.getActiveBookings().length
    }
  }

  /**
   * Returns the screening with the most booked seats, or null.
   * Ties are resolved by keeping the first screening.
   *
   * @returns {object|null} The screening statistics or null.
   */
  getMostBookedScreening() {
    const screenings = this.getScreeningStatistics()

    if (screenings.length === 0) {
      return null
    }

    let mostBooked = screenings[0]

    for (const screening of screenings.slice(1)) {
      if (screening.bookedSeats > mostBooked.bookedSeats) {
        mostBooked = screening
      }
    }

    return mostBooked
  }

  /**
   * Returns recorded booking summaries for a named customer.
   *
   * @param {string} customerName - Exact customer name.
   * @returns {object[]} Booking summaries and active statuses.
   */
  getCustomerBookingSummaries(customerName) {
    if (typeof customerName !== 'string' || customerName.trim() === '') {
      return []
    }

    return this.#cinema.bookings
      .filter(booking => booking.customerName === customerName)
      .map(booking => ({
        summary: booking.getSummary(),
        isActive: booking.isActive
      }))
  }
}
