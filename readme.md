## Code Generator

# Summary

This assignment provides a short code generator and decoder for store transactions. The short code contains the store ID, transaction ID, and the date of the transaction. The generated short code is a Base64 encoded string with a custom character set. The short code has a maximum length of 9 characters.

# How to use

To utilse this appilcation, clone the repository and open the index.html in a live server.

# Functions

`toCustomBase64(number, length)`
Converts a decimal number to a custom base64 string, this allows us to encapsulate a larger amount of characters in a smaller amount of characters by encoding

- `number`: the decimal to be converted
- `length`: the length of the resulting base64 string

`fromCustomBase64(str)`
Converts a custom base64 string back to a decimal number

- `str`: The custom encoded base64 string to be converted

`generateShortCode(storeId, TransactionId, data)`
Generates a short code based on the store, the transaction and the date. -`storeId`: The store ID -`transactionId`: The transaction ID -`date`: The date of the transaction

`decodeShortCode(shortCode, currentDate)`
Decodes a short code and returns an object containing store ID, transaction ID and date.

- `shortCode`: The short code to be decoded
- `currentDate`: The current date

# Tests

To run the tests, call the `RunTests()` function. The results will be displayed in the `test-results` div
The test examines the following aspects:

- Short code length, it must be less than 9 characters or equal to
- Short code data type, it must be a string
- Transaction date, it must be able to be coded and decoded successfully
- Store ID, it must be able to be coded and decoded successfully
- Transaction ID, it must be able to be coded and decoded succesfully

# License

Free! No lic.

# Author

Name: Abdullah Al Fadhly "Abewd"
Github: https://github.com/abewd
Repo: https://github.com/abewd?tab=repositories
