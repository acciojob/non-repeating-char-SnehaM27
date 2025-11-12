function firstNonRepeatedChar(str) {
  const charCount = {};

  // Step 1: Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 3: If none found, return null
  return null;
}

// Examples
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
console.log(firstNonRepeatedChar('abcab'));   // Output: 'c'
console.log(firstNonRepeatedChar(''));        // Output: null
