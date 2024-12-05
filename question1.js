/**
 *
 * Write a function that:
 * - takes an array of strings as input
 * - removes any spaces in the beginning or end of the strings
 * - removes any forward slashes (/) in the strings
 * - makes the string all lowercase
 * - return the new array
 * @format
 *
 *
 */

function tidyUpString(strArr) {
  // way1 )
  // let word2 = [];
  // let word = strArr.map((num) => num.trim());
  // for (let i = 0; i < word.length; i++) {
  //   if (word[i].includes("/")) {
  //     word2.push(
  //       word[i].slice(0, word[i].indexOf("/")) +
  //         word[i].slice(word[i].indexOf("/") + 1)
  //     );
  //   } else {
  //     word2.push(word[i]);
  //   }
  // }

  // let result = word2.map((a) => a.toLowerCase());
  // return result;
  // way2 )
  return strArr.map((num) => num.trim().replace("/", "").toLowerCase());
}
console.log(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]));

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "tidyUpString function works - case 1",
  tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
  ["daniel", "irina", "gordon", "ashleigh"]
);
test(
  "tidyUpString function works - case 2",
  tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
  ["sanyia", "michael", "anthony", "tim"]
);
