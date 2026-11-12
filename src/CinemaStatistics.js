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
}
