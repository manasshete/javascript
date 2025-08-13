// ------------------------------ Dates in JavaScript ------------------------------

// Create a new Date object with the current date and time
let myDate = new Date();

// Convert date to string with full date and time
console.log(myDate.toString()); // Example: "Wed Aug 13 2025 10:15:30 GMT+0530 (India Standard Time)"

// Get the current year
console.log(myDate.getFullYear()); // Example: 2025

// Get the current month (0-11, so add +1 to get human-readable month)
console.log(myDate.getMonth() + 1); // Example: 8 (August)

// Get the current day of the month
console.log(myDate.getDate()); // Example: 13

// Get a human-readable date without time
console.log(myDate.toDateString()); // Example: "Wed Aug 13 2025"

// Get date and time in local format
console.log(myDate.toLocaleString()); // Example: "13/8/2025, 10:15:30 am"

// Check the type of Date object
console.log(typeof myDate); // Output: "object"

// ------------------------------ Creating Specific Dates ------------------------------

// Create a specific date using string format (MM-DD-YYYY)
let myCreatedDate = new Date("01-14-2025");
console.log(myCreatedDate.toLocaleString()); // Example: "14/1/2025, 12:00:00 am"

// ------------------------------ Working with Timestamps ------------------------------

// Get current timestamp in milliseconds since January 1, 1970 (Epoch time)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Example: 1755050730123

// Get timestamp of a specific date
console.log(myCreatedDate.getTime()); // Example: 1736812200000

// Get current timestamp in seconds (floor removes decimal part)
console.log(Math.floor(Date.now() / 1000)); // Example: 1755050730

// ------------------------------ Formatting Date ------------------------------

// Create a new Date for formatting example
let newDate = new Date();

// Format date to show weekday and UTC time zone
console.log(
    newDate.toLocaleString('default', {
        weekday: "long", // Full weekday name (e.g., Monday)
        timeZone: "UTC"  // Convert to UTC time zone
    })
);
