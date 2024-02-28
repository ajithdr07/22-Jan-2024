/**
 *
 * 1: Check if a Number is Positive, Negative, or Zero
 *
 *  */
const num = 1;
if (num > 0) {
  console.log(`Number ${num} is positive`);
} else if (num < 0) {
  console.log(`Number ${num} is negative`);
} else {
  console.log(`Number is Zero`);
}

/**
 *
 * 2: Check if a Year is a Leap Year
 *
 * */
const year = 2024;
if (year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

/**
 *
 * 3: Determine the Largest of 3 Numbers
 *
 */
const a = 1;
const b = 2;
const c = 3;

if (a > b && a > c) {
  console.log("a is the largest");
} else if (b > a && b > c) {
  console.log("b is the largest");
} else if (c > a && c > b) {
  console.log("c is the largest");
} else {
  console.log("No number is larger than the other two");
}

/**
 *
 * 4: Write code using switch statement to show
 * traffic signal light information.
 *
 */
const color = "red";
switch (color) {
  case "red":
    console.log("Stop! The color is red.");
    break;
  case "green":
    console.log("Go! The color is green.");
    break;
  case "yellow":
    console.log("Slow down! The color is yellow.");
    break;
  default:
    console.log("Invalid color");
}
