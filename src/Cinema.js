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
}
