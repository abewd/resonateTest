// Utilising BASE64 - Encoding binary data
const customBase64Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-~";

// Convert a decimal to a Base64 string
function toCustomBase64(number, length) {
  let result = "";
  // Run through it using a for loop
  for (let i = 0; i < length; i++) {
    // number divided by 64, use that number as an index to access corresponding
    // characters from base64, round it up so its a whole number and not a decimal
    // append character to result
    result = customBase64Chars[number % 64] + result;
    number = Math.floor(number / 64);
  }
  return result;
}
// Convert a custom base64 string back to a decimal number
function fromCustomBase64(str) {
  // Run through each character in the string
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    // Multiply the index by 64 and then add it to the index
    result = result * 64 + customBase64Chars.indexOf(str[i]);
  }
  return result;
}

// TODO: Modify this function
// This function will generate a shortcode based on storeID, transactionID and current Date
function generateShortCode(storeId, transactionId, date) {
  // const date = new Date();
  // Days since epoch
  const daysSinceEpoch = Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
  // StoreIDEncoded to only have 2 characters (what store items bought from)
  const storeIdEncoded = toCustomBase64(storeId, 2);
  // DaysEncoded to only have 3 characters (date in days since epoch)
  const daysEncoded = toCustomBase64(daysSinceEpoch, 3);
  // TransactionIdEncoded to have 4 characters (transaction ID)
  const transactionIdEncoded = toCustomBase64(transactionId, 4);
  // Return a string with all the characters displayed together
  return storeIdEncoded + daysEncoded + transactionIdEncoded;
}

// TODO: Modify this function
// This code will make sense of the code we generated in the generateShortCode function
function decodeShortCode(shortCode, currentDate) {
  // extract first 2 characters
  const storeIdEncoded = shortCode.substr(0, 2);
  // Extract the next 3
  const daysEncoded = shortCode.substr(2, 3);
  // Extract the final 4
  const transactionIdEncoded = shortCode.substr(5, 4);

  // Return to decimal
  const storeId = fromCustomBase64(storeIdEncoded);
  // Return to decimal
  const daysSinceEpoch = fromCustomBase64(daysEncoded);
  // Return to decimal
  const transactionId = fromCustomBase64(transactionIdEncoded);

  // Calculate item purchase date through daysSinceEpoch
  const shopDate = new Date(daysSinceEpoch * 24 * 60 * 60 * 1000);

  // Return comprehensible things lol
  return {
    storeId: storeId,
    shopDate: shopDate,
    transactionId: transactionId,
  };
}

//
//
//
//
//
// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//

// Sorry, I had to change some code in here. Hope you dont mind :)
// I edited it to include the test output code
function RunTests() {
  var storeIds = [175, 42, 0, 9];
  var transactionIds = [9675, 23, 123, 7];
  var currentDate = new Date();

  storeIds.forEach(function (storeId) {
    transactionIds.forEach(function (transactionId) {
      var shortCode = generateShortCode(storeId, transactionId, currentDate);
      var decodeResult = decodeShortCode(shortCode, currentDate);
      // Add test output code
      $("#test-results").append(
        "<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>"
      );
      AddTestResult("Length <= 9", shortCode.length <= 9);
      AddTestResult("Is String", typeof shortCode === "string");
      AddTestResult("Is Today", IsToday(decodeResult.shopDate));
      AddTestResult("StoreId", storeId === decodeResult.storeId);
      AddTestResult("TransId", transactionId === decodeResult.transactionId);
    });
  });
}

function IsToday(inputDate) {
  // Get today's date
  var todaysDate = new Date();
  // call setUTCHours to take the time out of the comparison
  return (
    inputDate.setUTCHours(0, 0, 0, 0) == todaysDate.setUTCHours(0, 0, 0, 0)
  );
}

function AddTestResult(testName, testResult) {
  var div = $("#test-results").append(
    "<div class='" +
      (testResult ? "pass" : "fail") +
      "'><span class='tname'>- " +
      testName +
      "</span><span class='tresult'>" +
      testResult +
      "</span></div>"
  );
}
//
