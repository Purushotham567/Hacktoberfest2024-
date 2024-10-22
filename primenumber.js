function isPrime(num) {
    // Handle edge cases
    if (num <= 1) return false; // 1 and below are not prime
    if (num === 2) return true;  // 2 is the only even prime number
    if (num % 2 === 0) return false; // Other even numbers are not prime

    // Check for factors from 3 to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // Found a divisor, so it's not prime
    }

    return true; // If no divisors were found, it's a prime number
}

// Test the function
console.log(isPrime(7));  // Output: true (7 is prime)
console.log(isPrime(15)); // Output: false (15 is not prime)
console.log(isPrime(2));  // Output: true (2 is prime)
console.log(isPrime(1));  // Output: false (1 is not prime)
