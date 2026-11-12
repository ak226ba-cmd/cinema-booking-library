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
}
