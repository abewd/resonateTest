// Utilising BASE64 - Encoding binary data to a neater format
const customBase64Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-~";

function toCustomBase64(number, length) {
  let result = "";
  while (length--) {
    result += customBase64Chars[number % 64];
    number = Math.floor(number / 64);
  }
  return result;
}
console.log(result);

function fromCustomBase64(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = result * 64 + customBase64Chars.indexOf(str[i]);
  }
  return result;
}

// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
  // Logic goes here
  return "ABCDEFGHI";
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  // Logic goes here

  return {
    storeId: 0, // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: 0, // transaction id goes here
  };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {
  var storeIds = [175, 42, 0, 9];
  var transactionIds = [9675, 23, 123, 7];

  storeIds.forEach(function (storeId) {
    transactionIds.forEach(function (transactionId) {
      var shortCode = generateShortCode(storeId, transactionId);
      var decodeResult = decodeShortCode(shortCode);
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
  // call setHours to take the time out of the comparison
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
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
