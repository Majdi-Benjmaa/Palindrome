function findPalindromes(paragraph) {
  // Define a helper function to check if a word contains a palindrome
  function hasPalindrome(word) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }

  // Split the paragraph into words using spaces, commas, and periods as separators
  let words = paragraph.split(/\s|,\s*|\.\s*/);

  // Remove empty strings from the array of words
  words = words.filter(word => word);

  // Find words containing palindromes in the array of words
  const palindromes = words.filter(word => word.length > 1 && hasPalindrome(word));

  return palindromes;
}
// // Example usage:
  // const paragraph = "A man, a plan, a canal, Panama. Racecar is a palindrome.";
  // const result = findPalindromes(paragraph);
  
  // // Display the result in the HTML document
  // const outputElement = document.getElementById("output");
  // outputElement.textContent = "Palindromes: " + result.join(', ');

function findAndDisplayPalindromes() {
  // Get the input text from the user
  const userInput = document.getElementById("textInput").value.trim();

  // Check if the text input is empty
  if (!userInput) {
    // Display a message if the input is empty
    const outputElement = document.getElementById("output");
    outputElement.textContent = "Please write something!";
  } else {
    // Find palindromes using the existing function
    const result = findPalindromes(userInput);

    // Display the result in the HTML document
    const outputElement = document.getElementById("output");
    outputElement.textContent = result.length > 0
      ? "Palindromes: " + result.join(', ')
      : "No palindromes found.";
  }
}
