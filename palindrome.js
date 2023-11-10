function findPalindromes(paragraph) {
  function isPalindrome(word) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }

  function findPalindromicWords(words) {
    return words.filter(word => word.length > 1 && isPalindrome(word));
  }

  function findPalindromicPhrases(words) {
    let phrases = [];
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const phrase = words.slice(i, j).join(' ');
        if (isPalindrome(phrase)) {
          phrases.push(phrase);
        }
      }
    }
    return phrases;
  }

  const cleanedParagraph = paragraph.replace(/[.,]/g, ''); // Remove periods and commas for paragraph palindrome check
  const words = cleanedParagraph.split(/\s+/).filter(word => word);

  const palindromicWords = findPalindromicWords(words);
  const palindromicPhrases = findPalindromicPhrases(words);

  return {
    palindromicParagraph: isPalindrome(cleanedParagraph) ? cleanedParagraph : null,
    palindromicPhrases: palindromicPhrases.length > 0 ? palindromicPhrases : null,
    palindromicWords: palindromicWords.length > 0 ? palindromicWords : null
  };
}

function findAndDisplayPalindromes() {
  const userInput = document.getElementById("textInput").value.trim();

  if (!userInput) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "<span class='output-label'>Please write something!</span>";
  } else {
    const result = findPalindromes(userInput);

    const outputElement = document.getElementById("output");
    let outputText = "";

    if (result.palindromicParagraph) {
      outputText += "<span class='output-label'>Palindrome Paragraph:</span> " + result.palindromicParagraph + "<br><br>";
    }

    if (result.palindromicPhrases) {
      outputText += "<span class='output-label'>Palindrome Phrases:</span><br>" + result.palindromicPhrases.map(phrase => "  " + phrase).join('<br>') + "<br><br>";
    }

    if (result.palindromicWords) {
      outputText += "<span class='output-label'>Palindrome Words:</span> " + result.palindromicWords.join(', ');
    }

    outputElement.innerHTML = outputText || "<span class='output-label'>No palindromes found.</span>";
  }
}
