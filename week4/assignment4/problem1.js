// Problem 1: Temperature Converter Suite
// Troy
// 10/23/2025

function celsiusToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit
  // Formula: (C × 9/5) + 32
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius
  // Formula: (F - 32) × 5/9
  return ((fahrenheit - 32) * 5) / 9;
}

function getTemperatureDescription(fahrenheit) {
  // Return description based on temperature
  if (fahrenheit < 32) return "Freezing";
  if (fahrenheit <= 50) return "Cold";
  if (fahrenheit <= 70) return "Cool";
  if (fahrenheit <= 85) return "Warm";
  return "Hot";
}

// Test cases
console.log("Testing celsiusToFahrenheit:");
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212

console.log("\nTesting fahrenheitToCelsius:");
console.log(fahrenheitToCelsius(32)); // 0
console.log(fahrenheitToCelsius(68)); // 20

console.log("\nTesting getTemperatureDescription:");
console.log(getTemperatureDescription(25)); // "Freezing"
console.log(getTemperatureDescription(75)); // "Warm"
