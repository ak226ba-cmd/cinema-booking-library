# Test Report

## Test method

The module was tested using a separate test application located in the `test-app` folder.

Each test compares the expected result with the actual result using `if` statements. The test application prints `PASS` when the result is correct and `FAIL` when the result is incorrect.

The tests can be run with:

```bash
node test-app/test.js
```

## Test results

| What was tested | How it was tested | Result |
|---|---|---|
| Seat label | Created seat A5 and checked `getSeatLabel()` | PASS |
| Seat availability | Checked that a new seat is available | PASS |
| Seat booking | Booked an available seat | PASS |
| Seat cancellation | Cancelled a booked seat | PASS |
| Screening seat creation | Created 3 rows with 5 seats each and checked total seats | PASS |
| Find seat | Searched for seat B3 using `getSeat()` | PASS |
| Available seats | Checked number of available seats before and after booking | PASS |
| Booked seat count | Booked one seat and checked `getBookedSeatCount()` | PASS |
| Booking confirmation | Created and confirmed a booking | PASS |
| Booking cancellation | Cancelled an active booking | PASS |
| Booking summary | Checked the text returned by `getSummary()` | PASS |
| Adult ticket price | Calculated standard price for an adult | PASS |
| Child discount | Calculated price for a child | PASS |
| Senior discount | Calculated price for a senior | PASS |
| Premium seat price | Calculated ticket price for a premium seat | PASS |
| Age discount check | Checked `hasAgeDiscount()` for child and adult | PASS |
| Add screening | Added a screening to the cinema | PASS |
| Find screening | Searched for a screening by movie title | PASS |
| Add booking | Added a confirmed booking to the cinema | PASS |
| Active bookings | Checked number of active bookings | PASS |

## Summary

All implemented tests passed. The main functionality of the module has been tested, including seats, screenings, bookings, ticket prices and cinema management.