/**
 * Manages cinema screenings and bookings.
 */
export class Cinema {
  constructor(name) {
    this.name = name
    this.screenings = []
    this.bookings = []
  }

  /**
   * Adds a screening to the cinema.
   *
   * @param {object} screening - The screening to add.
   * @returns {boolean} True if the screening was added.
   */
  addScreening(screening) {
    if (!screening) {
      return false
    }

    this.screenings.push(screening)
    return true
  }

  /**
   * Returns all screenings for a specific movie.
   *
   * @param {string} movieTitle - The movie title.
   * @returns {object[]} Matching screenings.
   */
  findScreeningsByMovie(movieTitle) {
    const matchingScreenings = []

    for (const screening of this.screenings) {
      if (screening.movieTitle === movieTitle) {
        matchingScreenings.push(screening)
      }
    }

    return matchingScreenings
  }

  /**
   * Adds a confirmed booking.
   *
   * @param {object} booking - The booking to add.
   * @returns {boolean} True if the booking was added.
   */
  addBooking(booking) {
    if (!booking || !booking.isActive) {
      return false
    }

    this.bookings.push(booking)
    return true
  }

  /**
   * Returns all active bookings.
   *
   * @returns {object[]} Active bookings.
   */
  getActiveBookings() {
    const activeBookings = []

    for (const booking of this.bookings) {
      if (booking.isActive) {
        activeBookings.push(booking)
      }
    }

    return activeBookings
  }

  /**
   * Returns the total number of screenings.
   *
   * @returns {number} Number of screenings.
   */
  getScreeningCount() {
    return this.screenings.length
  }
}
