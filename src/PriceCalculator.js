
/**
 * Calculates ticket prices for cinema bookings.
 */
export class PriceCalculator {
  #seatSurcharges

  /**
   * @param {object} seatSurcharges - Extra prices by seat type.
   */
  constructor(seatSurcharges = {}) {
    this.#seatSurcharges = { ...seatSurcharges }
  }

  /**
   * Calculates the ticket price.
   *
   * @param {number} basePrice - The normal ticket price.
   * @param {number} age - The customer's age.
   * @param {string} seatType - The seat type.
   * @returns {number} The final ticket price.
   */
  calculatePrice(basePrice, age, seatType) {
    let price = basePrice

    if (age < 12) {
      price *= 0.5
    } else if (age >= 65) {
      price *= 0.7
    }

    const surcharge = this.#seatSurcharges[seatType] ?? 0

    return price + surcharge
  }

  /**
   * Checks if the customer gets an age discount.
   *
   * @param {number} age - The customer's age.
   * @returns {boolean} True if a discount applies.
   */
  hasAgeDiscount(age) {
    return age < 12 || age >= 65
  }
}
