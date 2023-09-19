function isPalindrome(word) {
  // Convert the word to lowercase to make it case-insensitive
  word = word.toLowerCase();

  // Base case: An empty word or a word with a single character is a palindrome
  if (word.length <= 1) {
    return true;
  }

  // Compare the first and last characters of the word
  if (word[0] === word[word.length - 1]) {
    // If they are equal, recursively check the rest of the word
    return isPalindrome(word.slice(1, -1));
  } else {
    // If they are different, the word is not a palindrome
    return false;
  }
}

// Example usage:
const word = 'kayak';
const result = isPalindrome(word);
if (result) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
